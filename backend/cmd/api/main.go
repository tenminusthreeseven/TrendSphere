package main

import (
	"trendsphere/backend/internal/config"
	"trendsphere/backend/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	config.LoadEnv()

	router := gin.Default()
	routes.SetupRoutes(router)

	router.Run(":8080")
}