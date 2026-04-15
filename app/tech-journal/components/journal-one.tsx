"use client";

import { useState } from "react";
import Image from "next/image";

export default function MicroservicesSpringboot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-300 shadow-md rounded-2xl bg-gray-50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 font-semibold text-lg flex justify-between cursor-pointer"
      >
        Microservices Integration in Spring Boot
        <span>{open ? "-" : "+"}</span>
      </button>

      {open && (
        <div className="px-6 py-4 text-sm text-gray-600 whitespace-pre-line space-y-4 bg-white">
          <div>
            <h3 className="font-semibold text-gray-800">Things Needed</h3>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Spring Boot (Microservices Framework)</li>
              <li>Kafka (Event-driven Communication)</li>
              <li>Prometheus (Metrics Monitoring)</li>
              <li>Grafana (Visualization Dashboard)</li>
              <li>Spring Cloud Gateway (API Gateway)</li>
              <li>Eureka Server (Service Discovery)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">How It Works</h3>
            <p>
              Microservices architecture splits your system into independent
              services such as User Service, Order Service, and Payment Service.
              Each service runs independently and communicates over network
              protocols.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Communication</h3>
            <p>
              Services communicate using REST APIs for synchronous calls and
              Kafka for asynchronous event-driven messaging (e.g., order
              created, payment processed).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">API Gateway</h3>
            <p>
              Use Spring Cloud Gateway to route requests, handle authentication,
              and centralize entry points for all microservices.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Database Design</h3>
            <p>
              Each microservice should have its own database to avoid tight
              coupling and improve scalability.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Monitoring</h3>
            <p>
              Prometheus collects metrics from services, while Grafana
              visualizes system performance, uptime, and errors in dashboards.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 text-lg">
              Prerequisites / What Needs to Be Installed
            </h3>

            <p className="mt-2 text-gray-600">
              Before setting up microservices with Spring Boot, make sure you
              have the following installed:
            </p>

            <ul className="list-disc ml-5 mt-3 space-y-1 text-gray-600">
              <li>
                <b>Docker Desktop</b> (for running Kafka, Prometheus, Grafana)
              </li>
              <li>
                <b>Postman</b> (for API testing)
              </li>
            </ul>

            <p className="mt-3 text-gray-600">
              Optional but recommended tools:
            </p>

            <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-600">
              <li>Kafka UI (for viewing topics and messages)</li>
              <li>Docker Compose (usually included in Docker Desktop)</li>
            </ul>
          </div>

          {/* NEW SECTION */}
          <div>
            <h3 className="font-semibold text-gray-800">
              Step 1: Kafka + Monitoring Setup (Docker)
            </h3>

            <p className="mt-2">
              First, create a folder named <b>kafka</b> (you can name it
              anything). Inside it, create a <b>.yml or .yaml</b> file and add
              the following:
            </p>

            <pre className="mt-3 bg-gray-100 p-3 rounded-md overflow-x-auto whitespace-pre-wrap text-xs leading-5">
              {`services:
    kafka:
        image: apache/kafka:4.2.0   # Use Kafka image (message broker)
        container_name: kafka       # Name of the container
        ports:
            - "9092:9092"             # Expose Kafka on port 9092 (so your apps can connect)

        environment:
            - KAFKA_NODE_ID=1
            - KAFKA_PROCESS_ROLES=broker,controller
            - KAFKA_CONTROLLER_QUORUM_VOTERS=1@kafka:9093
            - KAFKA_LISTENERS=PLAINTEXT://:9092,CONTROLLER://:9093
            - KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092
            - KAFKA_CONTROLLER_LISTENER_NAMES=CONTROLLER
            - KAFKA_LOG_DIRS=/tmp/kraft-combined-logs
            - KAFKA_CLUSTER_ID=5L6g3nShT-eMCtK--X86sw
            - KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1
            - KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR=1
            - KAFKA_TRANSACTION_STATE_LOG_MIN_ISR=1

    kafka-exporter:
        image: danielqsj/kafka-exporter
        ports:
        - "9308:9308"
        command:
        - "--kafka.server=kafka:9092"

    prometheus:
        image: prom/prometheus
        container_name: prometheus
        ports:
        - "9090:9090"
        volumes:
        - ../monitoring/prometheus.yml:/etc/prometheus/prometheus.yml

    grafana:
        image: grafana/grafana
        container_name: grafana
        ports:
        - "3001:3000"
        volumes:
        - grafana-storage:/var/lib/grafana

    volumes:
    grafana-storage:`}
            </pre>
            <p className="mt-3">
              <b>Note:</b> The volume path{" "}
              <code>../monitoring/prometheus.yml</code> should match the actual
              location of your <b>prometheus.yml</b> file on your project
              directory.
            </p>
          </div>
          {/* STEP 2 */}
          <div>
            <h3 className="font-semibold text-gray-800">
              Step 2: Configure Prometheus (prometheus.yml)
            </h3>

            <p className="mt-2">
              Create a <b>prometheus.yml</b> file inside your monitoring folder.
              This file tells Prometheus what services to monitor and how often
              to scrape metrics.
            </p>

            <pre className="mt-3 bg-gray-100 p-3 rounded-md overflow-x-auto whitespace-pre-wrap text-xs leading-5">
              {`global:
    scrape_interval: 5s  
    # Prometheus will check (scrape) metrics every 5 seconds

    scrape_configs:

    - job_name: 'spring-boot-services'  
        # Group name for your Spring Boot apps

        metrics_path: '/actuator/prometheus'  
        # Endpoint where Spring Boot exposes metrics

        static_configs:
        - targets: 
            - 'host.docker.internal:8080'  
            # User Service (runs on port 8080)

            - 'host.docker.internal:8081'  
            # Another service (example: Role Service)

            - 'host.docker.internal:8085'  
            # Another service (example: API Gateway)

    - job_name: 'kafka'  
        # Group name for Kafka monitoring

        static_configs:
        - targets: ['kafka-exporter:9308']  
        # Kafka exporter container exposes Kafka metrics here`}
            </pre>
            <p className="mt-3 text-gray-600">
              <b>Note:</b> In the <code>targets</code> section, you should add
              all your running microservices (e.g. user-service, order-service,
              gateway, etc.). Prometheus will then automatically monitor them
              and check if they are up, running, or down.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-800">
              Example Folder Structure
            </h3>

            <p className="mt-2">
              This is an example of how your project folders should be
              organized:
            </p>

            <pre className="mt-3 bg-gray-100 p-3 rounded-md overflow-x-auto whitespace-pre-wrap text-xs leading-5">
              {`parent/
│
├── kafka/
│   └── docker-compose.yml
│
├── monitoring/
│   └── prometheus.yml
│
└── (other microservices projects here)
    ├── user-service/
    ├── order-service/
    └── api-gateway/`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              Step 3: Run Docker Compose
            </h3>

            <p className="mt-2 text-gray-600">
              Open <b>PowerShell</b> (or terminal) and navigate to the folder
              where your
              <b> docker-compose.yml</b> file is located.
            </p>

            <p className="mt-2 text-gray-600">
              Then run the following command to start all services (Kafka,
              Prometheus, Grafana, Redis):
            </p>

            <pre className="mt-3 bg-gray-100 p-3 rounded-md overflow-x-auto whitespace-pre-wrap text-xs leading-5">
              {`docker compose up -d`}
            </pre>

            <p className="mt-3 text-gray-600">
              This will run all containers in detached mode (<b>-d</b>), meaning
              they will run in the background.
            </p>

            <p className="mt-2 text-gray-600">
              You can verify if the containers are running by opening{" "}
              <b>Docker Desktop</b> or using
              <code className="mx-1">docker ps</code> in your terminal.
            </p>

            <p className="mt-2 text-gray-600">
              Below is how it should look in Docker:
            </p>

            {/* Optional image placeholder */}
            <div className="mt-3">
              <Image
                src="/images/journal/docker-running-example.png"
                width={1200}
                height={600}
                alt="Docker running containers example"
                className="rounded-md border border-gray-200 shadow-sm w-full h-auto"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              Step 4: Create Maven Project & Required Dependencies
            </h3>

            <p className="mt-2 text-gray-600">
              Now that all necessary services are running, create your Spring
              Boot Maven project and make sure you include the following
              dependencies:
            </p>

            <ul className="list-disc ml-5 mt-3 space-y-1 text-gray-600">
              <li>Spring Boot Actuator</li>
              <li>Micrometer Prometheus Registry</li>
              <li>Apache Kafka</li>
              <li>Spring Web MVC</li>
              <li>Spring Boot DevTools</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              Step 5: Application Configuration (application.properties)
            </h3>

            <p className="mt-2 text-gray-600">
              Configure your Spring Boot microservice for Kafka, Actuator, and
              Prometheus monitoring. Each section is separated for clarity.
            </p>

            {/* APPLICATION NAME + PORT */}
            <h4 className="mt-4 font-semibold text-gray-700">
              Application Name & Server Port
            </h4>
            <pre className="mt-2 bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
              {`spring.application.name=user-service

#Port
server.port=8080`}
            </pre>

            {/* KAFKA CONFIG */}
            <h4 className="mt-4 font-semibold text-gray-700">
              Kafka Configuration
            </h4>
            <pre className="mt-2 bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
              {`spring.kafka.bootstrap-servers=localhost:9092
spring.kafka.consumer.group-id=user-group
spring.kafka.consumer.auto-offset-reset=earliest

spring.kafka.consumer.key-deserializer=org.apache.kafka.common.serialization.StringDeserializer
spring.kafka.consumer.value-deserializer=org.apache.kafka.common.serialization.StringDeserializer

spring.kafka.producer.key-serializer=org.apache.kafka.common.serialization.StringSerializer
spring.kafka.producer.value-serializer=org.apache.kafka.common.serialization.StringSerializer`}
            </pre>

            {/* ACTUATOR CONFIG */}
            <h4 className="mt-4 font-semibold text-gray-700">
              Actuator Configuration
            </h4>
            <pre className="mt-2 bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
              {`management.endpoints.web.exposure.include=health,info,prometheus
management.endpoint.health.show-details=always`}
            </pre>

            {/* PROMETHEUS CONFIG */}
            <h4 className="mt-4 font-semibold text-gray-700">
              Prometheus Configuration
            </h4>
            <pre className="mt-2 bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
              {`management.endpoint.prometheus.enabled=true
management.prometheus.metrics.export.enabled=true`}
            </pre>

            {/* LOGGING CONFIG */}
            <h4 className="mt-4 font-semibold text-gray-700">
              Logging Configuration (Optional)
            </h4>
            <pre className="mt-2 bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
              {`# logging.level.org.springframework.kafka=DEBUG
# logging.level.org.apache.kafka=INFO`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              Step 6: Creating Controller, Kafka Producer & Consumer
            </h3>

            <p className="mt-2 text-gray-600">
              Now we will create a simple flow where a REST API sends a message
              to Kafka, and a consumer listens and processes it.
            </p>

            {/* CONTROLLER */}
            <h4 className="mt-4 font-semibold text-gray-700">
              1. Controller (Send Message to Kafka)
            </h4>
            <pre className="mt-2 bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
              {`@RestController
@RequestMapping("/api/messages")
public class MessageController {

    private final KafkaTemplate<String, String> kafkaTemplate;

    public MessageController(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    @PostMapping("/send")
    public String sendMessage(@RequestParam String message) {
        kafkaTemplate.send("user-topic", message);
        return "Message sent to Kafka: " + message;
    }
}`}
            </pre>

            {/* CONSUMER */}
            <h4 className="mt-4 font-semibold text-gray-700">
              2. Kafka Consumer (Listen to Messages)
            </h4>
            <pre className="mt-2 bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
              {`@Service
public class MessageConsumer {

    @KafkaListener(topics = "user-topic", groupId = "user-group")
    public void consume(String message) {
        System.out.println("Received message from Kafka: " + message);
    }
}`}
            </pre>

            <p className="mt-3 text-gray-600">
              The controller sends messages to the Kafka topic <b>user-topic</b>
              , and the consumer listens and processes them automatically.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              Step 7: Testing with Postman
            </h3>

            <p className="mt-2 text-gray-600">
              Now that your controller and Kafka consumer are ready, you can
              test the flow using Postman.
            </p>

            <h4 className="mt-4 font-semibold text-gray-700">
              1. Open Postman
            </h4>
            <p className="mt-2 text-gray-600">
              Create a new <b>POST request</b>.
            </p>

            <h4 className="mt-4 font-semibold text-gray-700">
              2. Use this endpoint
            </h4>
            <pre className="mt-2 bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
              {`http://localhost:8080/api/messages/send?message=HelloKafka`}
            </pre>

            <h4 className="mt-4 font-semibold text-gray-700">
              3. Expected Result
            </h4>
            <p className="mt-2 text-gray-600">After sending the request:</p>

            <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-600">
              <li>
                Postman will return: <b>Message sent to Kafka: HelloKafka</b>
              </li>
              <li>Kafka Consumer will print in console:</li>
            </ul>

            <pre className="mt-2 bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
              {`Received message from Kafka: HelloKafka`}
            </pre>

            <p className="mt-3 text-gray-600">
              This confirms that your <b>Spring Boot → Kafka → Consumer</b> flow
              is working correctly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
