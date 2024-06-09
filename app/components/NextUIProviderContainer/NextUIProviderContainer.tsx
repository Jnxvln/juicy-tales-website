import { NextUIProvider } from "@nextui-org/react"

export default function NextUIProviderContainer ({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			{children}
		</NextUIProvider>
	)
}