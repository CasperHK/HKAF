package tests

import (
	"github.com/goravel/framework/testing"

	"oroblanco/hkaf-backend/bootstrap"
)

func init() {
	bootstrap.Boot()
}

type TestCase struct {
	testing.TestCase
}
