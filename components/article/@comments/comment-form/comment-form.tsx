import { Button } from "components/shared/ui/button";
import { Form } from "components/shared/ui/form";

export const CommentForm = () => {
  return (
    <Form.Root>
      <Form.Field>
        <Form.Label>Comment</Form.Label>
        <Form.Textarea placeholder="Write a comment ..." />
      </Form.Field>

      <div className="flex justify-end">
        <Button size="md">Post</Button>
      </div>
    </Form.Root>
  );
};
