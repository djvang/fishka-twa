import { Page, Card, Button, Link } from "framework7-react";
import { BackButton } from "../components/BackButton";

const BuyAdsList = () => {
  return (
    <Page name="buy-ads-list">
      <BackButton />

      {[1, 2, 3, 4, 5, 6].map((key) => (
        <Link
          key={key}
          animate={false}
          transition={false}
          href="/buy-ads-one/"
          style={{
            color: "inherit",
            display: "block",
          }}
        >
          <Card
            headerDivider
            title={
              <div
                style={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontSize: 22, fontWeight: 700 }}>
                    38.72 FISHKA
                  </div>
                  <div style={{ fontSize: 14, color: "gray" }}>
                    Price per 1 TONAI
                  </div>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <Button fill round color="blue">
                    Buy
                  </Button>
                </div>
              </div>
            }
            content={
              <table>
                <tbody>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        maxWidth: 130,
                      }}
                    >
                      Cuddly Sloth
                    </th>
                    <td>8 trades • 100%</td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        fontWeight: "normal",
                        color: "gray",
                        paddingRight: 4,
                        maxWidth: 130,
                      }}
                    >
                      Available
                    </th>
                    <td>14.86 TONAI</td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        fontWeight: "normal",
                        color: "gray",
                        paddingRight: 4,
                        maxWidth: 130,
                      }}
                    >
                      Limits
                    </th>
                    <td>575.62 FISHKA</td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        fontWeight: "normal",
                        color: "gray",
                        paddingRight: 4,
                        maxWidth: 130,
                      }}
                    >
                      Payment Methods
                    </th>
                    <td>Okko</td>
                  </tr>
                </tbody>
              </table>
            }
          />
        </Link>
      ))}
    </Page>
  );
};

export default BuyAdsList;
