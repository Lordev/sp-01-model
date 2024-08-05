import Scene from '@/components/Scene';
import Logo from '@/components/svg/Logo';
import ShoppingCart from '@/components/svg/ShoppingCart';
import Overlay from '@/components/Overlay';
import Background from '@/components/Background';

export default function Home() {
	return (
		<main className="min-h-screen w-full relative ">
			<Background>
				<Logo className="text-white absolute left-5 top-5" />
				<Scene />
				<Overlay />
			</Background>
		</main>
	);
}
