"use client";

import { useState } from "react";

export default function RedisIntegrationSpringboot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-300 shadow-md rounded-2xl bg-gray-50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 font-semibold text-lg flex justify-between cursor-pointer"
      >
        Redis Integration in Spring Boot
        <span>{open ? "-" : "+"}</span>
      </button>

      {open && (
        <div className="px-6 py-4 text-sm text-gray-600 space-y-6 bg-white">
          {/* INTRO */}
          <div>
            <h3 className="font-semibold text-gray-800">What is Redis?</h3>
            <p className="mt-2">
              Redis is an in-memory database used for caching and fast data
              retrieval. It improves performance by reducing database calls.
            </p>
          </div>

          {/* WHY REDIS */}
          <div>
            <h3 className="font-semibold text-gray-800">Why Use Redis?</h3>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Faster data access (in-memory storage)</li>
              <li>Reduces load on primary database</li>
              <li>Improves API response time</li>
              <li>Used for caching, sessions, and rate limiting</li>
              <li>Highly scalable and lightweight</li>
            </ul>
          </div>

          {/* HOW IT WORKS */}
          <div>
            <h3 className="font-semibold text-gray-800">
              How Redis Works in Spring Boot
            </h3>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Spring Boot connects to Redis server (usually via Docker)</li>
              <li>Data is stored as key-value pairs</li>
              <li>
                RedisTemplate or StringRedisTemplate is used for operations
              </li>
              <li>Frequently used data is cached to avoid DB queries</li>
            </ul>
          </div>

          {/* STEP 1 */}
          <div>
            <h3 className="font-semibold text-gray-800">
              Step 1: Add Dependency
            </h3>

            <pre className="mt-2 bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
              {`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>`}
            </pre>
          </div>

          {/* STEP 2 */}
          <div>
            <h3 className="font-semibold text-gray-800">
              Step 2: Redis Configuration
            </h3>

            <pre className="mt-2 bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
              {`@Configuration
@EnableCaching
public class RedisConfig {

    @Bean
    protected CacheManager cacheManager(RedisConnectionFactory factory) {

        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
                .serializeKeysWith(
                        RedisSerializationContext.SerializationPair.fromSerializer(new StringRedisSerializer())
                )
                .serializeValuesWith(
                        RedisSerializationContext.SerializationPair.fromSerializer(new GenericJackson2JsonRedisSerializer())
                );

        return RedisCacheManager.builder(factory)
                .cacheDefaults(config)
                .build();
    }
}`}
            </pre>
          </div>

          {/* STEP 3 */}
          <div>
            <h3 className="font-semibold text-gray-800">
              Step 3: Using @Cacheable
            </h3>

            <pre className="mt-2 bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
              {`@Override
@Cacheable(value = "users", key = "#email")
public UserEntity findUserByEmail(String email) {
    System.out.println("🔥 DB CALLED");
    return userDao.findUserByEmail(email);
}`}
            </pre>
          </div>

          {/* STEP 4 */}
          <div>
            <h3 className="font-semibold text-gray-800">
              Step 4: How to Test It
            </h3>

            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>
                First API call → "🔥 DB CALLED" prints (data comes from DB)
              </li>
              <li>Second API call → no DB log (data comes from Redis cache)</li>
              <li>This confirms caching is working correctly</li>
            </ul>

            <p className="mt-3">
              If "DB CALLED" only appears once, Redis caching is working
              properly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
