package routes

import (
	"trendsphere/backend/handlers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {
	router.GET("/health", handlers.HealthCheck)
	router.POST("/upload", handlers.UploadFile)
	router.GET("/jobs/:id/status", handlers.GetJobStatus)
	router.GET("/results/:id", handlers.GetResult)
}