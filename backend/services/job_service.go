package services

import (
	"fmt"
	"time"

	"trendsphere/backend/models"
)

var Jobs = map[string]models.Job{}

func CreateJob(fileName, s3Key string) models.Job {
	job := models.Job{
		ID:       fmt.Sprintf("job_%d", time.Now().UnixNano()),
		Status:   "uploaded",
		S3Key:    s3Key,
		FileName: fileName,
	}

	Jobs[job.ID] = job
	return job
}