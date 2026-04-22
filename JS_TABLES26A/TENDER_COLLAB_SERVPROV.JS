// TENDER_COLLAB_SERVPROV.js

window.TENDER_COLLAB_SERVPROV = {
  "tables": {
    "TENDER_COLLAB_SERVPROV": {
      "description": "This table contains the information for various service providers to whom the tender collaboration record was sent. In the case of normal tenders there is one record in this table matching to the tender collaboration record. However for broadcast and spot tenders there are multiple (n) records in this table for every tender collaboration record.",
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Foreign key to Tender Collaboration"
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SERVPROV",
          "info": "The service provider who received the tender or for spot bidding, the service provider spot bid"
},
        "TRANSACTION_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "The date of the tender collaboration either tender sent, accept, withdrawal, etc or the last tender spot bid"
},
        "ACCEPTANCE_CODE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "A",
                    "D",
                    "C",
                    "P"
          ],
          "info": "Tender acceptance status for a shipment. Values are A (Tender Accepted), D (Tender Declined), C (Tender Conditionally Accepted) and P (Tender Partially Accepted)."
},
        "RESPONSE_COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COM_METHOD",
          "info": "The communication method used for the collaboration"
},
        "RESPONDING_GL_USER_GID": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The gluser responding in the collaboration"
},
        "DECLINE_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "If awarded the reason for the award spot bid other than the lowest bid, and if declined the reason for tender decline."
},
        "DISPATCH_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The id of the contact of the service provider"
},
        "BID_AMOUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The amount of the bid indicated by this service provider"
},
        "BID_AMOUNT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency of the bid amount"
},
        "BID_AMOUNT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The amount of the bid indicated by this service provider in base units"
},
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "R",
                    "G",
                    "Y"
          ],
          "info": "Indicator indicating whether or not this service provider has submitted a valid bid.  Values are R (red) and G(Green)"
},
        "IS_WINNER": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Yes if service provider is the winner, no otherwise.  If traditional tender, this is set to Y if / when they accept the tender offer."
},
        "RESPONSE_I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": true,
          "info": "store the i_transaction_no of in_bound i_transaction when tender response is sent through integration."
},
        "PICKUP_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Original value is from shipment, if servprov changes pickup time, it is stored in this column."
},
        "TENDER_COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COM_METHOD",
          "info": "Record the com method used in tender notification."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "RESPONSE_TIME": {
          "type": "DATE",
          "nullable": true
},
        "SPOT_ADJUSTED_COST": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Stores the calculated adjusted cost for the spot bid using the spot rate adjustment factor on the service provider."
},
        "SPOT_ADJUSTED_COST_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Stores the base calculated adjusted cost for the spot bid using the spot rate adjustment factor on the service provider."
},
        "SPOT_ADJ_COST_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Stores the currency unit of the calculated adjusted cost for the spot bid using the spot rate adjustment factor on the service provider."
},
        "HAS_BID_OPTIONS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Field to check if service provider has provided any conditional bidding."
},
        "SPOT_RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "Spot rate specified while bidding."
},
        "IS_DIGITAL_FREIGHT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, then these spot bid rates are from digital freight user."
}
      },
      "fk_tables": [
        "SERVPROV_TENDER_COMMENT",
        "SERVPROV_TENDER_EQUIPMENT",
        "SERVPROV_TENDER_REFNUM"
]
    }
  }
};