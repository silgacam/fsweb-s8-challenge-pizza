
    beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("Sipariş notu alanına metin yazabilmeli", () => {
    cy.get("#siparisNotu")
      .type("Lütfen sıcak gönderin")
      .should("have.value", "Lütfen sıcak gönderin");
  });


  it("Birden fazla pizza malzemesi seçebilmeli", () => {
    cy.contains(".checkbox-label", "Domates")
      .find('input[type="checkbox"]')
      .check({ force: true });

    cy.contains(".checkbox-label", "Soğan")
      .find('input[type="checkbox"]')
      .check({ force: true });

    cy.contains(".checkbox-label", "Biber")
      .find('input[type="checkbox"]')
      .check({ force: true });

    cy.contains(".checkbox-label", "Domates")
      .find('input[type="checkbox"]')
      .should("be.checked");

    cy.contains(".checkbox-label", "Soğan")
      .find('input[type="checkbox"]')
      .should("be.checked");

    cy.contains(".checkbox-label", "Biber")
      .find('input[type="checkbox"]')
      .should("be.checked");
  });


  it("Geçerli siparişi gönderebilmeli", () => {

    cy.get('input[name="boyut"][value="M"]')
      .check({ force: true });


    cy.get("#hamur").select("İnce");

   

    cy.intercept("POST", "https://reqres.in/api/pizza", {
      statusCode: 201,
      body: {
        id: "test-123",
        message: "Sipariş başarılı",
      },
    }).as("siparisGonder");


    cy.contains("button", "SİPARİŞ VER").click();


    cy.wait("@siparisGonder")
      .its("response.statusCode")
      .should("equal", 201);


    cy.location("pathname").should("equal", "/siparis");
  });
