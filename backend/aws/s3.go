package aws

import (
	"context"
	"fmt"
	"mime/multipart"
	"path/filepath"
	"time"

	"trendsphere/backend/internal/config"

	awsConfig "github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/credentials"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

func UploadFileToS3(file *multipart.FileHeader) (string, string, error) {
	ctx := context.Background()

	cfg, err := awsConfig.LoadDefaultConfig(
		ctx,
		awsConfig.WithRegion(config.GetEnv("AWS_REGION")),
		awsConfig.WithCredentialsProvider(
			credentials.NewStaticCredentialsProvider(
				config.GetEnv("AWS_ACCESS_KEY_ID"),
				config.GetEnv("AWS_SECRET_ACCESS_KEY"),
				"",
			),
		),
	)
	if err != nil {
		return "", "", err
	}

	client := s3.NewFromConfig(cfg)

	src, err := file.Open()
	if err != nil {
		return "", "", err
	}
	defer src.Close()

	ext := filepath.Ext(file.Filename)
	key := fmt.Sprintf("uploads/%d%s", time.Now().UnixNano(), ext)

	bucket := config.GetEnv("AWS_BUCKET_NAME")

	_, err = client.PutObject(ctx, &s3.PutObjectInput{
		Bucket: &bucket,
		Key:    &key,
		Body:   src,
	})
	if err != nil {
		return "", "", err
	}

	s3URL := fmt.Sprintf(
		"https://%s.s3.%s.amazonaws.com/%s",
		bucket,
		config.GetEnv("AWS_REGION"),
		key,
	)

	return key, s3URL, nil
}