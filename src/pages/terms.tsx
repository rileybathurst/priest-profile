import * as React from "react"
import { Link } from "gatsby" // I should add this back in as a simple link home
import Layout from "../components/layout"
import HeaderContact from "../components/header-contact";
import Seo from "../components/seo";

// &#59; semicolon

const TermsPage = () => {
  return (
    <Layout>
      <Seo
        title="Terms and Conditions - Priest Sheetmetal &amp; Plate Christchurch"
      />
      <HeaderContact />
      <main className="page-width">
        <p><Link to="/">Home</Link> &gt; Terms and Conditions</p>
        <h1>Terms and Conditions of sale</h1>
        <ol className="terms">
          <li id="interpretation">
            INTERPRETATION
            <ol>{/* depth 1.1 */}
              <li>in these terms and conditions:

                <ul>{/* depth 1.1.1 without numbers */}
                  <li><b>"person" includes</b> a corporation, association, firm, company, partnership or individual&#59;</li>
                  <li><b>"buyer"</b> means the person buying the goods from the Company&#59;</li>
                  <li><b>"Company"</b> means PRIEST SHEET METAL LIMITED</li>
                  <li><b>"contract"</b> means contract between the Company and the buyer for the purchase of the goods&#59;</li>
                  <li><b>"contract price"</b> means the price of goods as agreed between the Company and the buyer, subject to any variation in accordance with clauses 2 or 4&#59;</li>
                  <li><b>"date of the contract"</b> means&#59;</li>
                </ul>

                <ol className="ol__alpha">
                  {/* needs an a */}
                  <li>where the contract arises from an order placed by the buyer, the date of acceptance of the order by the Company&#59;</li>
                  {/* this doesnt have a pre on it */}
                  or
                  <li>where the contract arises from a quotation given by the Company, the date upon which written notification of acceptance of the quotation is received by the Company or where no written notification of acceptance of the quotation is received S by the Company, the date of such other form of acceptance as the Company in its discretion determines to treat as a valid acceptance&#59; "goods" means the goods being purchased by the buyer from the Company which are the subject of the contract.</li>
                </ol>
              </li>


              {/* 1.2 */}
              <li>Headings are used as a matter of a convenience only and shall not affect the interpretation of these terms and conditions.</li>
            </ol>
          </li>

          <li id="price-payment">
            PRICE AND PAYMENT
            <ol>
              <li>The price for goods shall be n accordance with the Company's current prices as at the date of the contract. Any difference between the price for goods at the date of the order or quotation and at the date of delivery due to circumstances beyond the control of the Company
                shall be to the buyer's account.</li>
              <li>Payment for the goods shall be n made in accordance with the terms of the contract. If not If specified in the contract, payment for the goods
                shall be made immediately upon receipt of invoice &#40;which shall be rendered upon proof of shipment&#41;.</li>
            </ol>
          </li>

          <li id="compliance">
            COMPLIANCE WITH LAWS
            <ol>
              <li>The Company shall only be responsible to comply with the regulations, bylaws, codes and standards specified in the contract and the Company shall be under no liability whatsoever for any failure to meet any other regulations, bylaws, codes and standards. h the event of there being any changes in any regulations, bylaws, codes or standards with which the Company is obliged to comply after the date of the contract, then any additional costs in meeting any such changes shall be to the buyer's account.</li>
            </ol>
          </li>

          <li id="taxes-duties">
            TAXES AND DUTIES
            <ol>
              <li>Unless expressly included in any quotation given by the Company, Goods and Services Tax and other taxes and duties assessed or levied in connection with the supply of the goods to the buyer are not included in the price and shall be the responsibility of the buyer.</li>
            </ol>
          </li>

          <li id="interest-late-payments">
            INTEREST FOR LATE PAYMENT
            <ol>
              <li>Interest at a rate a equal to 6% above the Company's bank's indicator lending rate from time to time calculated on a daily basis may be charged on any moneys outstanding under the contract. Such interest shall be payable from the date payment was due until the date payment Is received by the Company but without prejudice to the Company's other rights or remedies in respect of the buyer's default in failing to make payment on the due date.</li>
            </ol>
          </li>

          <li id="delivery">
            DELIVERY
            <ol>
              <li>Delivery of goods shall be made at the Company's premises unless otherwise agreed in writing. f the buyer fails to take delivery, the goods shall be deemed to have been delivered when the Company was willing to deliver them. h this event any extra cost to the Company for transport and/or storage shall be to the buyer's account.</li>
              <li>The Company reserves the right to deliver the goods by instalments and each instalment shall be deemed to be a separate contract under the same provisions as the main contract. Should the Company fail to deliver or make defective delivery of one or more instalments this shall not entitle the buyer to cancel the main contract.</li>
              <li>Delivery of 10% more or less than the quantity of the goods ordered by the buyer shall constitute performance of any contract, the amount under or over supplied to be deducted or charged for pro rata.</li>
            </ol>
          </li>

          <li id="risk">
            RISK
            <ol>
              <li>Notwithstanding that property in any goods may remain with the Company, all risk in respect thereof shall pass to the buyer upon delivery.</li>
              <li>If any of the goods are damaged or destroyed prior to property therein passing to the buyer, the Company shall be entitled, without prejudice to any of its other rights or remedies under the contract &#40;including the right to receive payment of the balance of the contract price for the goods&#41;, to receive all insurance proceeds which are payable n respect of the goods &#40;whether or not the purchase price of such goods has become payable under the contract&#41; and the production of these terms and conditions by the Company shall be sutticient evidence of the Company's right to receive payment of such insurance proceeds without the need for further enquiry by any person dealing with the Company. Any such insurance proceeds shall be applied by the Company as follows:
                <ol className="ol__alpha">
                  <li>first, in payment of the contract price of the goods which are damaged or destroyed, if unpaid&#59;</li>
                  <li>second, n payment of the outstanding contract price of any other goods supplied to the buyer by the Company, whether under the contract or otherwise&#59;</li>
                  <li>third. in payment ol any other sums due and payable to the Company by the buyer on any account.</li>
                  <li>thereafter any balance shall be paid to the buyer.</li>
                </ol>
              </li>
            </ol>
          </li>

          <li id="property">
            PROPERTY
            <ol>
              <li>Property in the goods shall not pass from the Company to the buyer &#40;and the buyer shall be a bailee only n respect of such goods&#41; until the buyer has paid in full the contract price and all other monies payable under the contract for the goods.</li>
              <li>If, prior to its acquiring property in any goods, the buyer makes any new objects from such goods or intermingles such goods with any other</li>
              <li>objects, any such new object shall be vested in the Company as surety for all sums owing to the Company whether n respect of the purchase price or contingency or otherwise howsoever.</li>

              <li>Prior to the buyer acquiring property n any goods, the Company may at any time directly or by its agents or servants enter upon any land,
                premises property where it believes such goods may be view and inspect the same an in the event of default by the buyer &#40;including
                without limitation default n the payment of any monies to due to the Company&#41; to retake possession thereof.</li>
            </ol>
          </li>

          <li id="mill-certificates">
            MILL CERTIFICATES
            <ol>
              <li>The Company shall supply a mill certificate in respect of the goods upon request of the buyer and may charge he buyer a fee n respect ol thereof&#41;.</li>
            </ol>
          </li>

          <li id="return-of-goods-defective-goods">
            RETURN OF GOODS/DEFECTIVE GOODS
            <ol>
              <li>Except as provided in this clause, the buyer shall not be entitled to return the tO goods to the Company for any reason whatsoever. h respect n of defective goods which the buyer is entitled to reject, the Company's liability shall be limited to either lat the discretion ol the Company&#41; repairing or replacing the goods or refunding the sale price thereof PROVIDED THAT:
                <ol className="ol__alpha">
                  <li>the buyer shall notify the Company within 7 days of delivery that the goods are defeclive:</li>
                  <li>the Company shall be allowed a reasonable opportunity to investigate the buyer's claim&#59;</li>
                  <li>the Company shall not be liable in respect of goods which have been tampered with or modified without the of approval of the Company or which have not been stored or used in the proper manner&#59; and</li>
                  <li>the Company shall not be liable 10 pay the buyer any amount in excess of such amount of f any&#41; as it shall have received from the supplier n respect thereof.</li>
                </ol>
              </li>
            </ol>
          </li>

          <li id="liability">
            LIABILITY
            <ol>
              <li>
                The Company shall not be liable for any reason whatsoever for any of the following:
                <ol className="ol__alpha">
                  <li>failure to deliver goods by a specified date&#59;</li>
                  <li>loss suffered by the buyer as a result of any event beyond the control of the Company&#59;</li>
                  <li>testing the goods&#59;</li>
                  <li>deterioration of goods due to exposure to the elements, after delivery&#59;</li>
                  <li>any negligence, misrepresentation or other act or omission by the Company or its agents&#59;</li>
                  <li>any loss or damage resulting directly or indirectly from any of the above.</li>
                </ol>
              </li>
              <li>Notwithstanding anything in this clause or n these terms and conditions, any liability of the Company arising hereunder shall not
                exceed the price of the contract under which such liability has arisen.
              </li>
            </ol>
          </li>

          <li id="default">
            DEFAULT
            <ol>
              <li>
                Without prejudice to any other remedies the company may have, if at any time, the buyer is n breach of any obligation hereunder &#40;including those relating to payment&#41;, the Company may suspend or terminate the supply of goods to the buyer and/or any other of its obligations hereunder. The Company shall not be liable to the buyer for any loss or damage suffered by the buyer as a result of the Company exercising its rights under this clause.
              </li>
            </ol>
          </li>


          <li id="patents-copyright">
            PATENTS AND COPYRIGHT
            <ol>
              <li>
                all Copyright n all drawings, specifications and other technical information provided by the Company connection with the contract is
                vested the Company</li>
              <li>If any goods are to be to supplied to the buyer's design, the buyer hereby warrants that the manufacture and supply of such goods by the Company will not infringe any patent, copyright, registered design or other rights of any other person and the buyer agrees to indemnify the Company against any liability incurred by the Company including any costs and expenses in the event of any claim being made that the manufacture or supply of such goods by the Company infringes any patent, copyright, registered design or other rights of any other person.</li>
            </ol>
          </li>

          <li id="dimensions-specifications">
            DIMENSIONS AND SPECIFICATIONS
            <ol>
              <li>Dimensions and specifications contained or referred to in the contract or n any catalogues or other publications maintained or issued by the Company are estimates only. Unless otherwise expressly agreed in writing, it is not condition of the contract that the goods will correspond precisely with such dimensions and specifications, and customary tolerances or. of in the absence of customary tolerances, reasonable tolerances shall be allowed.
              </li>
            </ol>
          </li>

          <li id="contract">
            CONTRACT
            <ol>
              <li>
                The items mentioned in the quotation &#40;where the contract arises from a quotation by the Company&#41; or in the items contained in the Company's confirmation of order &#40;where the contract arises from an order by the buyer&#41; together with these terms and conditions shall be the conditions of the contract. The contract is subject to the Company having the goods in stock. All other conditions, warranties, guarantees, descriptions, representations, conditions as to fitness or suitability for any purpose, tolerance to any conditions, merchantability, appearance, safety, durability or otherwise &#40;whether of a like nature or not&#41; and whether expressly or implied by aw,</li>
              <li>trade custom or otherwise are expressly excluded. n the case of any conflict between an order submitted by the buyer and the Company's confirmation of order and thele terms and of conditions, the Company's confirmation of order and these terms and conditions shall prevail. No agent or representative of the Company is authorised to make any representations, warranties or agreements n6t expressly confirmed </li>
              <li>by the Company n writing and the Company is not is any way bound by any such authorised statements nor can any such statements be taken to form a contract or part of contract with the Company collateral lo the contract.
              </li>
            </ol>
          </li>

          <li id="waiver">
            WAIVER
            <ol>
              <li>
                All the original rights, powers exemptions and remedies of the Company shall remain n full force notwithstanding any neglect, forbearance or delay n the enforcement thereof. The Company shall not be deemed to have waived any condition unless such waiver shall be n writing under signature of the Company or an authorised officer thereof, and unless the contrary shall be expressly stated, such waiver shall apply to and operate only in the particular transaction, dealing or matter.</li>
            </ol>
          </li>

          <li id="no-assignment">
            NO ASSIGNMENT
            <ul>
              <li>
                The buyer may not assign all or any of his rights or obligations under the contract without the prior written consent of 1&#41;3 Company.</li>
            </ul>
          </li>

          <li id="law-jurisdiction">
            LAW AND JURISDICTION
            <ol>
              <li>
                The contract shall n all respects be deemed to be a contract made in New Zealand and the conslruction, validity and performance of the
                contract shall be governed by New Zealand law.
              </li>
            </ol>
          </li>
        </ol>
      </main>
    </Layout >
  )
}

export default TermsPage
