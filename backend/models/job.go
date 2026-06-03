package models

type Job struct {
	ID       string `json:"id"`
	Status   string `json:"status"`
	S3Key    string `json:"s3Key"`
	FileName string `json:"fileName"`
}