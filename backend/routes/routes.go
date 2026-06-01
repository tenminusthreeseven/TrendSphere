package routes

import (
	"trendsphere/backend/handlers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {

	router.GET("/health", handlers.HealthCheck)

}