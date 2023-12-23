/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/4WvZ5SpnsQW
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ContactUs() {
  return (
    (<main className="p-8 space-y-8">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <img
        alt="Ultra wide placeholder"
        className="w-full h-auto"
        height="200"
        src="/placeholder.svg"
        style={{
          aspectRatio: "1000/200",
          objectFit: "cover",
        }}
        width="1000" />
      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="w-12 h-12">
                <AvatarImage alt="Producer" src="/placeholder.svg?height=48&width=48" />
                <AvatarFallback>PR</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">Producer</h2>
                <Badge>Pro</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MailboxIcon className="w-4 h-4" />
                <Link className="underline" href="#">
                  producer@example.com
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4" />
                <Link className="underline" href="#">
                  +1 234 567 890
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="w-12 h-12">
                <AvatarImage alt="Director" src="/placeholder.svg?height=48&width=48" />
                <AvatarFallback>DI</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">Director</h2>
                <Badge>Pro</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MailboxIcon className="w-4 h-4" />
                <Link className="underline" href="#">
                  director@example.com
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4" />
                <Link className="underline" href="#">
                  +0 987 654 321
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Button>Contact us</Button>
    </main>)
  );
}


function MailboxIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>)
  );
}


function PhoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}
