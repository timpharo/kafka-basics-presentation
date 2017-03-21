Properties producerProps = new Properties();
producerProps.put("bootstrap.servers", "localhost:9092");
producerProps.put("acks", "all");
producerProps.put("retries", 0);
producerProps.put("batch.size", 16384);
producerProps.put("linger.ms", 1);
producerProps.put("buffer.memory", 33554432);
producerProps.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
producerProps.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");
