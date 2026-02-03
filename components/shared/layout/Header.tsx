'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Search } from 'lucide-react';
import { IoClose } from 'react-icons/io5';
import { brandConfig } from '@/config/site/brand.config';
import { headerConfig } from '@/config/site/header.config';
import { navigationConfig } from '@/config/site/navigation.config';
import { cn } from '@/lib/utils';
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
      {navigationConfig.map((item) => (
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

const Header = ({
  variant = 'sticky',
  isDarkbg = false,
}: {
  variant?: 'sticky' | 'overlay';
  isDarkbg?: boolean;
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <header
      className={cn(
        'z-50 w-full px-6 py-7 lg:px-20',
        variant === 'sticky' && 'sticky top-0',
        variant === 'overlay' && 'absolute top-0 left-0',
        isDarkbg ? 'bg-transparent' : 'bg-background',
      )}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="hidden lg:block">
            <div className="relative w-full">
              <Input
                className={`w-full rounded-none border-0 pr-3 pl-10 ${
                  isDarkbg
                    ? 'border-b border-b-on-dark-input'
                    : 'border-b border-b-input/60'
                }`}
                placeholder=""
                aria-label="Search"
              />
              <Search
                className={`pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 ${
                  isDarkbg ? 'text-on-dark-input' : 'text-muted-foreground'
                }`}
              />
            </div>
          </div>

          {/* Logo */}
          <Link href="/">
            <Image
              src={isDarkbg ? brandConfig.logoPath : brandConfig.logoPathDark}
              alt={brandConfig.brandName}
              height={50}
              width={170}
            />
          </Link>
          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden">
            <button
              className={cn(
                'rounded-full border p-2',
                isDarkbg
                  ? 'border-on-dark-input text-on-dark-foreground'
                  : 'border-border text-foreground',
              )}
              onClick={toggleSidebar}
            >
              <Menu name="menu" size={18} />
            </button>
          </div>

          {/* Cart and SignUp Button (Desktop) */}
          <div className="hidden items-center gap-5 lg:flex">
            <Link href={headerConfig.cartHref}>
              <AppButton
                variant="outline"
                tone={isDarkbg ? 'light' : 'dark'}
                className="border-none shadow-none"
              >
                {headerConfig.cartLabel} (0)
              </AppButton>
            </Link>

            <Link href={headerConfig.signupHref}>
              <AppButton
                variant="outline"
                tone={isDarkbg ? 'light' : 'dark'}
                radius="full"
                className="px-8 py-2"
              >
                {headerConfig.signupLabel}
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
              src={brandConfig.logoPath}
              alt={brandConfig.brandName}
              height={50}
              width={170}
            />
            <button onClick={toggleSidebar} className="self-end">
              <IoClose size={24} />
            </button>
          </div>

          <Input
            className="my-8 w-full rounded-full border-white"
            placeholder={headerConfig.searchPlaceholder}
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
            <Link href={headerConfig.cartHref} className="w-full">
              <AppButton
                variant="outline"
                tone="light"
                radius="full"
                className="w-full px-4 py-2"
              >
                {headerConfig.cartLabel} (0)
              </AppButton>
            </Link>

            <Link href={headerConfig.signupHref} className="w-full">
              <AppButton
                variant="outline"
                tone="light"
                radius="full"
                className="w-full px-4 py-2"
              >
                {headerConfig.signupLabel}
              </AppButton>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
