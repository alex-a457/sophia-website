'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { Input } from '@/components/ui/input';
import { AppButton } from '../AppButton';
import AppImage from '../AppImage';

const Footer = () => {
  const { footer } = siteConfig;
  const [email, setEmail] = useState('');

  return (
    <footer className="flex w-full flex-col items-center justify-center px-4 md:px-6 lg:px-20">
      <div className="my-12 grid w-full grid-cols-1 gap-x-4 gap-y-12 px-5 pt-12 pb-8 sm:pt-4 lg:grid-cols-2 lg:gap-x-12 xl:my-24">
        {/* Newsletter */}
        <div className="flex w-full max-w-[550px] flex-col gap-6 text-left">
          <h2 className="text-[32px] font-medium text-foreground md:text-2xl md:text-[40px] xl:text-5xl">
            {footer.newsletter.title}
          </h2>

          <p className="text-xs text-muted-foreground sm:text-base">
            {footer.newsletter.description}
          </p>

          <div className="flex justify-center gap-2 lg:justify-start">
            <Input
              placeholder={footer.newsletter.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-full border border-muted-foreground focus-within:border-muted-foreground hover:border-muted-foreground"
            />
            <AppButton
              variant="solid"
              tone="dark"
              size="md"
              radius="full"
              className="h-12"
              // onClick={() => ...submit email}
            >
              {footer.newsletter.buttonText}
            </AppButton>
          </div>
        </div>

        {/* Right side: contact + columns */}
        <div className="flex w-full flex-col justify-between gap-6 md:flex-row lg:justify-between">
          {/* Contact */}
          <div className="">
            <h2 className="mb-6 text-2xl font-semibold text-primary">
              {footer.contact.title}
            </h2>

            <div className="text-muted-foreground">
              <div className="space-y-1 text-left text-base sm:text-lg">
                {footer.contact.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Columns (Shop, Customer Service, etc.) */}
          {footer.columns.map((col) => (
            <div key={col.title} className="sm:pl-4 lg:w-1/4 last:lg:w-2/5">
              <h2 className="mb-6 text-2xl font-semibold text-primary">
                {col.title}
              </h2>

              <div className="flex flex-col gap-2 text-muted-foreground">
                {col.links.map((l) => (
                  <Link
                    key={`${col.title}-${l.href}-${l.label}`}
                    href={l.href}
                    className="text-left text-base hover:underline focus:underline sm:text-lg"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full border-b border-primary opacity-10" />

      {/* Bottom row */}
      <div className="my-8 flex w-full flex-wrap items-center justify-between gap-6">
        {/* Social */}
        <div className="flex gap-4">
          {footer.socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="relative h-12 w-12"
            >
              <AppImage
                src={social.iconSrc}
                alt={social.label}
                fill
                loadingNeeded
                className={{
                  wrapperClass: 'relative h-12 w-12',
                  imageClass: 'object-contain',
                }}
              />
            </Link>
          ))}
        </div>

        {/* Bottom links + copyright */}
        <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
          {footer.bottomLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:underline focus:underline"
            >
              {l.label}
            </Link>
          ))}

          <span className="opacity-70">{footer.copyrightText}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
