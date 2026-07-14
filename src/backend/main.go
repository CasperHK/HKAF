package main

import (
	"oroblanco/hkaf-backend/bootstrap"
)

func main() {
	app := bootstrap.Boot()

	app.Start()
}
