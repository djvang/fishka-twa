import { useState } from "react";

import { Page, Block, List, ListItem, Link } from "framework7-react";
import { BackButton } from "../components/BackButton";
import { MainButton } from "../components/MainButton";

const SellAdsOne = (props) => {
  const [value, setValue] = useState("0");
  return (
    <Page name="sell-ads-one">
      <BackButton />
      <MainButton
        text="Continue"
        onClick={() => console.log("Continue Sell")}
      />

      <Block>
        <p>
          You are selling to <b>Cuddly Sloth</b>
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
        <div style={{ color: "gray" }}>Price per 1 TONAI ≈ 55.87 FISHKA</div>
      </Block>
      <List dividersIos strong inset>
        <ListItem title="Available Balance" after="0 TONAI" />
        <ListItem
          title="Payment Method"
          after={<Link href="/payments">Okko</Link>}
        />
        <ListItem title="Limits" after="17.898591218 ~ 216.73 TONAI" />
        <ListItem link="#" title="Ad Details" />
      </List>
    </Page>
  );
};

export default SellAdsOne;
