// TENDER_COLLAB_SERVPROV.js

window.TENDER_COLLAB_SERVPROV = {
  "tables": {
    "TENDER_COLLAB_SERVPROV": {
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Foreign key to Tender Collaboration "
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SERVPROV",
          "info": "The service provider who received the tender or for spot bidding, the service provider spot bid "
        },
        "TRANSACTION_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "The date of the tender collaboration either tender sent, accept, withdrawal, etc or the last tender spot bid "
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
          "info": "Either A for Tender Accept or D for Tender Decline "
        },
        "RESPONSE_COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COM_METHOD",
          "info": "The communication method used for the collaboration "
        },
        "RESPONDING_GL_USER_GID": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The gluser responding in the collaboration "
        },
        "DECLINE_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "If decline, the reason for the tender decline "
        },
        "DISPATCH_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The id of the contact of the service provider "
        },
        "BID_AMOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The amount of the bid indicated by this service provider "
        },
        "BID_AMOUNT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency of the bid amount "
        },
        "BID_AMOUNT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The amount of the bid indicated by this service provider in base units "
        },
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "R",
            "G",
            "Y"
          ],
          "info": "Indicator indicating whether or not this service provider has submitted a valid bid.  Values are R (red) and G(Green) "
        },
        "IS_WINNER": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Yes if service provider is the winner, no otherwise.  If traditional tender, this is set to Y if / when they accept the tender offer. "
        },
        "RESPONSE_I_TRANSACTION_NO": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "store the i_transaction_no of in_bound i_transaction when tender response is sent through integration. "
        },
        "PICKUP_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Original value is from shipment, if servprov changes pickup time, it is stored in this column. "
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
