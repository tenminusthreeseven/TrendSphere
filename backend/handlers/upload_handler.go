package handlers

import (
	"net/http"

	"trendsphere/backend/aws"
	"trendsphere/backend/services"

	"github.com/gin-gonic/gin"
)

func UploadFile(c *gin.Context) {
	file, err := c.FormFile("file")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "No file uploaded",
		})
		return
	}

	key, s3URL, err := aws.UploadFileToS3(file)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to upload file to S3",
		})
		return
	}

	job := services.CreateJob(file.Filename, key)

	c.JSON(http.StatusOK, gin.H{
		"jobId":   job.ID,
		"status":  job.Status,
		"file":    file.Filename,
		"s3Url":   s3URL,
		"message": "File uploaded successfully",
	})
}