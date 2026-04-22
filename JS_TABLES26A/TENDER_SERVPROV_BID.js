// TENDER_SERVPROV_BID.js

window.TENDER_SERVPROV_BID = {
  "tables": {
    "TENDER_SERVPROV_BID": {
      "description": "Tender service providers bids.",
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Foreign key to Tender Collaboration."
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SERVPROV",
          "info": "The service provider participating in spot bidding."
},
        "SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The sequence identifier for the spot bid."
},
        "BID_AMOUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The amount of the bid indicated by this service provider."
},
        "BID_AMOUNT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The amount of the bid indicated in base units by this service provider."
},
        "BID_AMOUNT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency of the bid amount."
},
        "PICKUP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The pickup date of the shipment."
},
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The GID of the source location of the shipment."
},
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The GID of the destination location of the shipment."
},
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "A unique identifier to define the transportation mode."
},
        "TRANSIT_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The transit time for the shipment."
},
        "TRANSIT_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The transit time in base units."
},
        "TRANSIT_TIME_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The unit of measure for the transit time."
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
        "IS_APPROVED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "The bid is approved by planner."
},
        "IS_DIRECT_ROUTE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Flag to indicate if the proposed flight is direct or not."
},
        "FLIGHT_INSTANCE_ID": {
          "type": "NUMBER",
          "nullable": true,
          "foreign_key": "FLIGHT_INSTANCE",
          "info": "Flight Instance ID to be updated to the shipment, if the bid option is approved."
},
        "SPOT_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Spot rate ID specified while creating this bid option."
},
        "TAG1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Stores information about the other fields for each bid."
},
        "TAG2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Stores information about the other fields for each bid."
},
        "TAG3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Stores information about the other fields for each bid."
},
        "BID_COMMENT": {
          "type": "VARCHAR2(250)",
          "nullable": true,
          "info": "Stores the user comments for each bid."
},
        "DELIVERY_ETA": {
          "type": "DATE",
          "nullable": true,
          "info": "The delivery or dropoff date of the shipment stop."
}
      },
      "fk_tables": []
    }
  }
};