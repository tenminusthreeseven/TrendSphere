package handlers

import (
	"net/http"

	"trendsphere/backend/services"

	"github.com/gin-gonic/gin"
)

func GetJobStatus(c *gin.Context) {
	jobID := c.Param("id")

	job, exists := services.Jobs[jobID]

	if !exists {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "Job not found",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"jobId": job.ID,
		"status": job.Status,
		"file": job.FileName,
	})
}