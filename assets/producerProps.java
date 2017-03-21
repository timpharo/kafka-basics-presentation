Properties consumerProps = new Properties();
consumerProps.put("bootstrap.servers", "localhost:9092");
consumerProps.put("group.id", "test");
consumerProps.put("enable.auto.commit", "false");
consumerProps.put("auto.commit.interval.ms", "1000");
consumerProps.put("session.timeout.ms", "30000");
consumerProps.put("key.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
consumerProps.put("value.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
