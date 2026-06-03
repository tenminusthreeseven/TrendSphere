package models

type Result struct {
	JobID         string  `json:"jobId"`
	TotalRows     int     `json:"totalRows"`
	AveragePrice  float64 `json:"averagePrice"`
	TopCategory   string  `json:"topCategory"`
	Status        string  `json:"status"`
}