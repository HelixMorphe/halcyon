import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InputSection from "./InputSection";
import TemplateStore from "./TemplateStore";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="compose" className="">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="compose">Compose</TabsTrigger>
        <TabsTrigger value="templates">Templates</TabsTrigger>
      </TabsList>
      <TabsContent value="compose">
        <InputSection />
      </TabsContent>
      <TabsContent value="templates">
        <div className="p-4">
          <TemplateStore />
        </div>
      </TabsContent>
    </Tabs>
  );
}
