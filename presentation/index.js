// Import React
import React from "react";

import consumerProps from '../assets/consumerProps.java';
import producerProps from '../assets/producerProps.java';
import consumerJavaCode from '../assets/consumer.java';
import producerJavaCode from '../assets/producer.java';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Code,
  CodePane,
  Link
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  consumers_nongroup: require("../assets/consumers_nongroup.jpg"),
  consumers_group: require("../assets/consumers_group.jpg"),
  consumers_group_mtpc: require("../assets/consumers_group_mtpc.jpg"),
  consumers_group_multi: require("../assets/consumers_group_multi.jpg"),
  kafka_e2e: require("../assets/kafka_e2e.png"),
};

const codeSnippets = {
  consumers_nongroup: require("../assets/consumers_nongroup.jpg"),
  consumers_group: require("../assets/consumers_group.jpg"),
  consumers_group_mtpc: require("../assets/consumers_group_mtpc.jpg"),
  consumers_group_multi: require("../assets/consumers_group_multi.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Kafka
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            like a bit off a shovel
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} textColor="secondary">What is Kafka?</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} textColor="secondary">What is Kafka good for?</Heading>
          <Text size={6} textColor="secondary">Kafka is good at real time data propogation and storage</Text>
          <Text size={6} textColor="secondary">Kafka when used as the data backbone of a company allows future adaptations by abstracting communications between application into a more reactive style approach</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} lineHeight={2} textColor="tertiary" caps>Advantages of Kafka</Heading>

          <Heading size={8} lineHeight={2} textColor="secondary">Highly Scalable</Heading>
          <Text size={8} fit lineHeight={1} textColor="secondary">Kafka replicates data and is able to support multiple subscribers. Additionally, it automatically balances consumers in the event of failure. That means that it’s more reliable than similar messaging services available.</Text>

          <Heading size={8} lineHeight={2} textColor="secondary">Highly Durable</Heading>
          <Text size={8} fit lineHeight={1} textColor="secondary">Kafka persists the messages on the disks, which provides intra-cluster replication. This makes for a highly durable messaging system.</Text>

          <Heading size={8} lineHeight={2} textColor="secondary">Highly Reliable</Heading>
          <Text size={8} fit lineHeight={1} textColor="secondary">Kafka is a distributed system, which is able to be scaled quickly and easily without incurring any downtime.</Text>

          <Heading size={8} lineHeight={2} textColor="secondary">Offers High Performance</Heading>
          <Text size={8} fit lineHeight={1} textColor="secondary">Kafka delivers high throughput for both publishing and subscribing, utilizing disk structures that are capable of offering constant levels of performance, even when dealing with many terabytes of stored messages.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="tertiary">KafkaConsumer Concepts</Heading>
          <Heading size={8} fit>Indevidual consumers</Heading>
          <Image width="40%" src={images.consumers_nongroup}/>
          <Heading size={8} fit>Grouped consumers</Heading>
          <Image width="40%" src={images.consumers_group}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="tertiary">KafkaConsumer Concepts cont....</Heading>
          <Heading size={8} fit>Multiple Groups consumers</Heading>
          <Image height="200" src={images.consumers_group_multi}/>
          <Heading size={8} fit>Parellel consumption limited by partitions</Heading>
          <Image height="200" src={images.consumers_group_mtpc}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="tertiary">Kafka e2e</Heading>
          <Image height="800" src={images.kafka_e2e}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
            <Heading size={5} textColor="tertiary">Example producer code</Heading>
            <CodePane lang="javascript" source={producerJavaCode}/>
            <Heading size={5} textColor="tertiary">Example consumer code</Heading>
            <CodePane lang="javascript" source={consumerJavaCode}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
            <Heading size={5} textColor="tertiary">Basic producer config</Heading>
            <CodePane lang="javascript" source={producerProps}/>
            <Heading size={5} textColor="tertiary">Basic consumer config</Heading>
            <CodePane lang="javascript" source={consumerProps}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
            <Heading size={4} textColor="tertiary">Further reading</Heading>
            <List>
              <ListItem><Link href="https://kafka.apache.org/">Kafka home</Link></ListItem>
              <ListItem><Link href="https://www.alooma.com/live">Live Kafka data visualisation</Link></ListItem>
              <ListItem><Link href="https://www.youtube.com/watch?v=EiWsPd6JDoo">Kafka explained video</Link></ListItem>
              <ListItem><Link href="https://www.youtube.com/watch?v=udnX21__SuU">Core concepts video</Link></ListItem>
              <ListItem><Link href="https://github.com/confluentinc/examples">Kafka code examples</Link></ListItem>
              <ListItem><Link href="https://www.confluent.io/blog/introducing-kafka-streams-stream-processing-made-simple/">Kafka streams made simple</Link></ListItem>
            </List>
        </Slide>

      </Deck>
    );
  }
}
