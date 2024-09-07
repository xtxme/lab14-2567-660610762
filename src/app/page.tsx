"use client";
import { Button, Container, Divider, Group, Pagination, Rating, Space, Text, Textarea, Title } from "@mantine/core";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Space h="xs" />
      <Title order={4} fw={700}>Your rating</Title>
      <Rating defaultValue={0} count={5} size="lg"/>

      <Text fz="14px" fs="bold" fw="500" mt="10px">Your review</Text>
      
      <Textarea
        placeholder="Do you enjoy eating?"
        autosize
        minRows={3}
      />
      <Button mt="10px"variant="filled" color="orange">Submit Review</Button>

      <Divider my="md" />
      <Group justify="center">
        <Title order={4} fw={700}>Elon Musk</Title>
        <Rating value={5} fractions={2} readOnly />
      </Group>

      <Text size="sm" c="dimmed" ta="center">Best pizza in this world. I give you X score.</Text>
      <Divider my="md" />
      <Group justify="center">
        <Title order={4} fw={700}>Mark Zuck</Title>
        <Rating value={4} fractions={2} readOnly />
      </Group>

      <Text size="md" c="dimmed" ta="center">My favourite part is pepperoni</Text>
      <Group mt="16px" justify="center">
        <Pagination total={20} color="orange"/>
      </Group>
      
      <Text ta="center" my="sm">
      <Footer year="2024" name="Tanapron Tangpadungsuk" studentId="660610762" />
      </Text>
    </Container>
  );
}
