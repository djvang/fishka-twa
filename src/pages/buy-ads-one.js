import { useState } from "react";

import { Page, Block, List, ListItem, Link, Icon } from "framework7-react";
import { BackButton } from "../components/BackButton";
import { MainButton } from "../components/MainButton";

const BuyAdsOne = () => {
  const [value, setValue] = useState("0");

  return (
    <Page name="buy-ads-one">
      <BackButton />
      <MainButton text="Continue" onClick={() => console.log("Continue Buy")} />

      <Block>
        <p>
          You are sending to <b>Cuddly Sloth</b>
        </p>
        <label
          style={{
            display: "flex",
            alignItems: "baseline",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "relative",
              fontSize: "56px",
              fontWeight: 700,
            }}
          >
            <input
              type="text"
              inputMode="decimal"
              autoComplete="off"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                border: "none",
                background: "transparent",
                color: "transparent",
                appearance: "none",
                margin: 0,
                padding: 0,
                fontSize: "56px",
                fontWeight: 700,
                caretColor: "black",
              }}
            />
            <div>{value > 0 ? value : 0}</div>
          </div>
          <div
            style={{
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "78px",
              color: "gray",
              marginLeft: 4,
            }}
          >
            TONAI
          </div>
        </label>
        <div style={{ color: "gray", marginBottom: 4 }}>
          Price per 1 TONAI ≈ 55.87 FISHKA
        </div>
        <Link style={{ fontSize: 18 }}>Buy All</Link>
      </Block>
      <List dividersIos strong inset>
        <ListItem
          title="Payment Method"
          after={
            <Link>
              Okko{" "}
              <Icon
                style={{ marginLeft: 4 }}
                size={18}
                f7="chevron_up_chevron_down"
              />
            </Link>
          }
        />
        <ListItem title="Limits" after="17.898591218 ~ 216.73 TONAI" />
        <ListItem link="#" title="Ad Details" />
      </List>
    </Page>
  );
};

export default BuyAdsOne;
