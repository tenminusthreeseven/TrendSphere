package handlers

import (
	"net/http"

	"trendsphere/backend/services"

	"github.com/gin-gonic/gin"
)

func GetResult(c *gin.Context) {
	jobID := c.Param("id")

	result, exists := services.Results[jobID]

	if !exists {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "Result not found",
		})
		return
	}

	c.JSON(http.StatusOK, result)
}