package services

import "trendsphere/backend/models"

var Results = map[string]models.Result{}

func GenerateMockResult(jobID string) models.Result {
	result := models.Result{
		JobID:        jobID,
		TotalRows:    1500,
		AveragePrice: 1299.99,
		TopCategory:  "Men Shoes",
		Status:       "completed",
	}

	Results[jobID] = result
	return result
}