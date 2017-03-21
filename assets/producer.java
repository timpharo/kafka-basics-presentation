Producer<String, String> producer = new KafkaProducer<>(props);
for(int i = 0; i < 100; i++){
   producer.send(new ProducerRecord<String, String>("my-topic", Integer.toString(i), Integer.toString(i)));
}

producer.close();
