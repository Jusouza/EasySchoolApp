package com.example.easyschool

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform