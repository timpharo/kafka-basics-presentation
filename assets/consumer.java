KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props);
try {
  while (running) {
      ConsumerRecords<String, String> records = consumer.poll(100);
      for (ConsumerRecord<String, String> record : records) {
          System.out.println(record.value())
      }
  }
} finally {
  consumer.close();
}
