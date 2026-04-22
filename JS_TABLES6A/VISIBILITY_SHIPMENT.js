// VISIBILITY_SHIPMENT.js

window.VISIBILITY_SHIPMENT = {
  "tables": {
    "VISIBILITY_SHIPMENT": {
      "columns": {
        "VISIBILITY_SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Visibility shipment. "
        },
        "VISIBILITY_SHIPMENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "TRACKING_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Package tracking number. "
        },
        "NUMBER_OF_PIECES": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of pieces in the shipment. "
        },
        "ACTUAL_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Actual date and time the package was picked up. "
        },
        "ESTIMATED_DELIVERY_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Estimated date and time the package will be delivered. "
        },
        "DESCRIPTION_OF_GOODS": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description of the package content. "
        },
        "REMARKS": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Users remarks. "
        },
        "SERVICE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Type of delivery service. "
        },
        "SHIPPER_ACCOUNT_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Account number of the sender. "
        },
        "RECEIVER_ACCOUNT_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Account number of the receiver. "
        },
        "PAYER_ACCOUNT_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Account number of the payer. "
        },
        "SHIPPER_INVOLVED_PARTY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Address information of the sender. "
        },
        "RECEIVER_INVOLVED_PARTY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Address information of the receiver. "
        },
        "STATUS": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Status of the shipment as defined by the last event received for the shipment. "
        },
        "P_DATE_KEY": {
          "type": "NUMBER()",
          "nullable": true
        },
        "SHIPPER_REFERENCE": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "LAST_EVENT_EVENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "LAST_EVENT_UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "SHIPPER_DISPLAY_TEXT": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "RECEIVER_DISPLAY_TEXT": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "EVENT_PIECE_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Represents the number of pieces received for the current status "
        },
        "LAST_EVENT_LOCATION": {
          "type": "VARCHAR2(1000)",
          "nullable": true
        },
        "HAS_PIECE_IDENTIFIER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y/N indicates if the shipment has piece level identifiers "
        },
        "LAST_EVENT_DATE_OFFSET": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The UTC offset for the last EVENT_DATE"
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
        }
      },
      "fk_tables": []
    }
  }
};
