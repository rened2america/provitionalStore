import { Avatar, Button, Input, Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "../components/icons/SearchIcon";

export default function Creators() {
  return (
    <main className="">
      <div
        style={{
          position: "relative",
          padding: "200px 0 140px",
          display: "grid",
          justifyItems: "center",
        }}
      >
        <Image
          src="https://ik.imagekit.io/freeflo/production/7b22dd96-285f-44c9-94e8-87782efb13a0.png?tr=w-3840,q-80&alt=media&pr-true"
          width="1366"
          height="600"
          alt="hero"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            color: "transparent",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            position: "absolute",
            width: "100%",
            top: "16px",
            left: "0",
            right: "0",
            padding: "2px 72px 0",
            justifyContent: "flex-end",
            fontFamily: "'Inter',sans-serif",
            letterSpacing: "-.0084rem",
            height: "60px",
          }}
        >
          <div
            style={{
              display: "grid",
              alignItems: "center",
            }}
          >
            <span>Merchlife</span>
          </div>
          <div style={{}}>
            <nav
              style={{
                backgroundColor: "rgba(0,0,0,.4)",
                backdropFilter: "blur(22.5px)",
                padding: "8px 8px",
                borderRadius: "100px",
                width: "297px",
                height: "56px",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <li
                  style={{
                    display: "grid",
                    textAlign: "center",
                    backdropFilter: "blur(22.5px)",
                    backgroundColor: "rgb(255 255 255 / 19%)",
                    alignContent: "center",
                    borderRadius: "24px",
                    width: "136.5px",
                    height: "40px",
                  }}
                >
                  <Link
                    href="/store"
                    style={{
                      color: "#e5e5e5",
                      padding: "8px 21px",
                    }}
                  >
                    <span
                      style={{
                        opacity: "1",
                      }}
                    >
                      Store
                    </span>
                  </Link>
                </li>
                <li
                  style={{
                    display: "grid",
                    textAlign: "center",
                    alignContent: "center",
                    borderRadius: "24px",
                    width: "136.5px",
                    height: "40px",
                  }}
                >
                  <Link
                    href="/creators"
                    style={{
                      color: "#e5e5e5",
                      padding: "8px 21px",
                    }}
                  >
                    <span
                      style={{
                        opacity: "1",
                      }}
                    >
                      Creators
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div
            style={{
              display: "grid",
              justifyContent: "end",
              alignContent: "center",
            }}
          >
            <nav>
              <ul
                style={{
                  display: "flex",
                  gap: "16px",
                }}
              >
                <li
                  style={{
                    display: "grid",
                    textAlign: "center",
                    backdropFilter: "blur(22.5px)",
                    backgroundColor: "rgb(255 255 255 / 19%)",
                    alignContent: "center",
                    borderRadius: "24px",
                    width: "200px",
                    height: "40px",
                  }}
                >
                  <Link
                    href="/store"
                    style={{
                      color: "#e5e5e5",
                      padding: "8px 21px",
                    }}
                  >
                    <span
                      style={{
                        opacity: "1",
                      }}
                    >
                      Create new design
                    </span>
                  </Link>
                </li>
                <li>
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    size="md"
                  />
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div
          style={{
            width: "60%",
            padding: "0 72px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
            position: "relative",
            minWidth: "800px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateRows: "1fr 2fr",
              justifyItems: "center",
              height: "100px",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              Merchlife
            </span>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                lineHeight: "3.2rem",
                color: "hsla(0,0%,100%,.79)",
                textAlign: "center",
              }}
            >
              Explore amazing creators.
            </div>
          </div>
        </div>
      </div>
      <section className="bg">dsdsadas</section>
    </main>
  );
}
