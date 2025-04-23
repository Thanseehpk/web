import React from "react";

export default function MysticMCClone() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom, #4b0082, #1a1a2e)", color: "white", fontFamily: "sans-serif" }}>
      <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "rgba(0,0,0,0.3)" }}>
        <h1>MysticMC</h1>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Wiki</a>
          <a href="#">Discord</a>
          <a href="#">Log In</a>
          <a href="#">Register</a>
        </nav>
      </header>

      <main style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <h2>Join MysticMC Today!</h2>
        <p>No-grief survival server for both Java & Bedrock players</p>
        <div style={{ background: "white", color: "black", display: "inline-block", padding: "0.5rem 1rem", marginTop: "1rem", borderRadius: "0.5rem" }}>
          join.mysticmc.co
        </div>
        <div><button style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>Play Now</button></div>
      </main>

      <section style={{ background: "#3b3b98", textAlign: "center", padding: "2rem 1rem" }}>
        <h3>What is MysticMC?</h3>
        <p>A friendly Minecraft server focused on creativity, trading, and building in a survival world. Connect and collaborate with players from both Java and Bedrock editions.</p>
      </section>

      <section style={{ textAlign: "center", padding: "2rem 1rem" }}>
        <div style={{ background: "white", color: "black", display: "inline-block", padding: "1rem", borderRadius: "1rem" }}>
          <h4>Visit Our Shop</h4>
          <p>Get ranks, crate keys, and more to enhance your gameplay.</p>
          <a href="https://shop.mysticmc.co" target="_blank" rel="noopener noreferrer">
            <button>Shop Now</button>
          </a>
        </div>
      </section>

      <footer style={{ background: "rgba(0,0,0,0.3)", textAlign: "center", padding: "1rem", fontSize: "0.9rem" }}>
        <p>MysticMC © 2025. Not affiliated with Mojang or Microsoft.</p>
        <p><a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a></p>
      </footer>
    </div>
  );
}
