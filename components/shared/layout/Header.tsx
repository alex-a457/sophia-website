'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { IoClose } from 'react-icons/io5';
import { siteConfig } from '@/config/site.config';
import { Input } from '@/components/ui/input';
import { AppButton } from '../AppButton';

type NavLinksProps = {
  className?: string;
  linkClassName?: (isDarkbg: boolean) => string;
  isDarkbg: boolean;
  onItemClick?: () => void;
};

function NavLinks({
  className,
  linkClassName,
  isDarkbg,
  onItemClick,
}: NavLinksProps) {
  return (
    <div className={className}>
      {siteConfig.navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={onItemClick}
          className={
            linkClassName?.(isDarkbg) ??
            (isDarkbg ? 'text-on-dark-foreground' : 'text-foreground')
          }
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkbg, _setDarkbg] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <header
      className={`sticky top-0 z-50 w-full px-6 py-7 lg:px-20 ${
        isDarkbg ? 'bg-transparent' : 'bg-background'
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="hidden lg:block">
            <Input
              className={`max-w-[244px] rounded-none border-0 ${
                isDarkbg
                  ? 'border-b-on-dark-input border-b'
                  : 'border-b border-b-input/20'
              }`}
              placeholder={siteConfig.header.searchPlaceholder}
            />
          </div>

          {/* Logo */}
          <Image
            src={isDarkbg ? siteConfig.logoPath : siteConfig.logoPathDark}
            alt={siteConfig.brandName}
            height={50}
            width={170}
          />

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden">
            <button
              className="rounded-full border border-primary p-2 text-foreground"
              onClick={toggleSidebar}
            >
              <Menu name="menu" size={18} />
            </button>
          </div>

          {/* Cart and SignUp Button (Desktop) */}
          <div className="hidden items-center gap-5 lg:flex">
            <Link href={siteConfig.header.cartHref}>
              <AppButton
                variant="outline"
                tone={isDarkbg ? 'light' : 'dark'}
                className="border-none shadow-none"
              >
                {siteConfig.header.cartLabel} (0)
              </AppButton>
            </Link>

            <Link href={siteConfig.header.signupHref}>
              <AppButton
                variant="outline"
                tone={isDarkbg ? 'light' : 'dark'}
                radius="full"
                className="px-8 py-2"
              >
                {siteConfig.header.signupLabel}
              </AppButton>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="mt-4 hidden items-center justify-center gap-5 lg:flex lg:text-sm xl:text-base">
          <NavLinks
            isDarkbg={isDarkbg}
            className="flex items-center justify-center gap-5"
            linkClassName={(dark) =>
              dark ? 'text-on-dark-foreground' : 'text-foreground'
            }
          />
        </nav>
      </div>

      {/* Sidebar (Mobile View) */}
      {isSidebarOpen && (
        <div className="fixed inset-y-0 right-0 flex w-3/4 flex-col gap-4 bg-sidebar p-6 text-sidebar-foreground sm:w-1/2">
          <div className="mt-8 flex items-center justify-between md:mt-14">
            <Image
              src={siteConfig.logoPath}
              alt={siteConfig.brandName}
              height={50}
              width={170}
            />
            <button onClick={toggleSidebar} className="self-end">
              <IoClose size={24} />
            </button>
          </div>

          <Input
            className="my-8 w-full rounded-full border-white"
            placeholder={siteConfig.header.searchPlaceholder}
          />

          {/* Sidebar Navigation */}
          <NavLinks
            isDarkbg={false}
            className="flex flex-col gap-2"
            linkClassName={() => 'py-2 text-sidebar-foreground'}
            onItemClick={() => setSidebarOpen(false)}
          />

          {/* Bottom Cart & SignUp */}
          <div className="mt-auto flex w-full gap-4">
            <Link href={siteConfig.header.cartHref} className="w-full">
              <AppButton
                variant="outline"
                tone="light"
                radius="full"
                className="w-full px-4 py-2"
              >
                {siteConfig.header.cartLabel} (0)
              </AppButton>
            </Link>

            <Link href={siteConfig.header.signupHref} className="w-full">
              <AppButton
                variant="outline"
                tone="light"
                radius="full"
                className="w-full px-4 py-2"
              >
                {siteConfig.header.signupLabel}
              </AppButton>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
