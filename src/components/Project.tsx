import React from "react";
import Image from "next/image";
import TiltComponent from "./TiltComponent";

interface ProjectProps {
  title: string;
  description: string;
  liveUrl: string;
  sourceCodeUrl: string;
  imageUrl: string;
}

export default function Project({
  title,
  description,
  liveUrl,
  sourceCodeUrl,
  imageUrl,
}: ProjectProps) {
  return (
    <div className="row">
      <div className="col-lg-4 col-sm-12">
        <div className="project-wrapper__text load-hidden">
          <h3 className="project-wrapper__text-title">{title}</h3>
          <div>
            <p className="mb-4">{description}</p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn cta-btn--hero"
            href={liveUrl}
          >
            See Live
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn text-color-main"
            href={sourceCodeUrl}
          >
            Source Code
          </a>
        </div>
      </div>
      <div className="col-lg-8 col-sm-12">
        <div
          className="project-wrapper__image load-hidden "
          suppressHydrationWarning={true}
        >
          <a rel="noreferrer" href={liveUrl} target="_blank">
            <TiltComponent>
              <Image
                alt={`${title} Image`}
                className="img-fluid"
                src={imageUrl}
                width={800}
                height={500}
                priority
              />
            </TiltComponent>
          </a>
        </div>
      </div>
    </div>
  );
}
