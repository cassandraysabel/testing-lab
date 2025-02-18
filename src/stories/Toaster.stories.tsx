import { Meta, StoryFn } from "@storybook/react";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";

export default {
  title: "Components/Toaster",
  component: Toaster,
} as Meta<typeof Toaster>;

const Template: StoryFn = () => {
  const { toast } = useToast();

  return (
    <div>
      <Button
        onClick={() =>
          toast({
            title: "Default Toast",
            description: "This is a standard toast notification.",
          })
        }
      >
        Show Toast
      </Button>
      <Toaster />
    </div>
  );
};

// Default Toast Story
export const DefaultToast = Template.bind({});

// Success Toast Story
export const SuccessToast = () => {
  const { toast } = useToast();

  return (
    <div>
      <Button
        onClick={() =>
          toast({
            title: "Success",
            description: "Your action was successful!",
          })
        }
      >
        Show Success Toast
      </Button>
      <Toaster />
    </div>
  );
};

// Error Toast Story
export const ErrorToast = () => {
  const { toast } = useToast();

  return (
    <div>
      <Button
        onClick={() =>
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
          })
        }
      >
        Show Error Toast
      </Button>
      <Toaster />
    </div>
  );
};
