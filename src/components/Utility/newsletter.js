import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function Newsletter() {
  return (
    <StyledNewsletter>
      <h3>tiny information to your inbox</h3>
      <p>
        Random thoughts about design systems , react , angular , design and many
        more.
      </p>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/rohanprasadofficial"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://buttondown.email/rohanprasadofficial', 'popupwindow')"
        class="embeddable-buttondown-form"
      >
        <input
          type="email"
          name="email"
          id="bd-email"
          placeholder="rohan@example.com"
        ></input>
        <input type="hidden" value="1" name="embed"></input>
        <button type="submit" value="Subscribe">
          Subscribe
        </button>
        <p>
          <Link href="https://buttondown.email" target="_blank">
            Powered by Buttondown.
          </Link>
        </p>
      </form>
    </StyledNewsletter>
  )
}

const StyledNewsletter = styled.div`
  margin: 2rem 0;
  border: 1px solid ${props => props.theme.body.title.foreground};
  max-width: 40rem;
  padding: 1.5rem 2rem;
  border-radius: 0.4rem;
  /* background-color: #051b1d; */

  input {
    padding: 0.5rem;
    margin-right: 1rem;
    border-radius: 0.4rem;
    width: 40%;
    padding-left: 1rem;
    border: 1px solid ${props => props.theme.body.title.foreground};
  }
  button {
    padding: 0.5rem 1rem;
    background-color: ${props => props.theme.body.title.foreground};
    color: ${props => props.theme.body.background};
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.body.description.foreground};
    font-size: 0.8rem;
  }
  p {
    padding: 0.5rem 0;
  }
`
