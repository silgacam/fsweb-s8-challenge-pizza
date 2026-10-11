describe("Pizza Sipariş Formu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("Sipariş sayfası açılmalı", () => {
    cy.contains("Position Absolute Acı Pizza").should("be.visible");
    cy.contains("SİPARİŞ VER").should("be.visible");
  });

  it("4'ten az malzeme seçilince siparişi engellemeli", () => {

    cy.contains("label.checkbox-label", "Pepperoni")
      .find('input[type="checkbox"]')
      .uncheck({ force: true });

    cy.contains("label.checkbox-label", "Sosis")
      .find('input[type="checkbox"]')
      .uncheck({ force: true });

    cy.get('input[name="boyut"][value="M"]')
      .check({ force: true });

    cy.get("#hamur").select("Normal");

    cy.contains("button", "SİPARİŞ VER").click();

    cy.contains("4 ile 10 arasında malzeme seçmelisin.")
      .should("be.visible");

    cy.location("pathname").should("eq", "/order");
  });

  it("Geçerli sipariş gönderilince sipariş özeti açılmalı", () => {

    cy.intercept("POST", "**/api/pizza", {
      statusCode: 201,
      body: { id: 1 },
    }).as("siparisGonder");

    cy.get('input[name="boyut"][value="M"]')
      .check({ force: true });

    cy.get("#hamur").select("Normal");

    cy.contains("button", "SİPARİŞ VER").click();

    cy.wait("@siparisGonder");

    cy.location("pathname").should("eq", "/siparis");

    cy.contains("SİPARİŞ ALINDI").should("be.visible");
    cy.contains("Boyut:").should("be.visible");
    cy.contains("Hamur:").should("be.visible");
    cy.contains("Sipariş Toplamı").should("be.visible");
  });
});