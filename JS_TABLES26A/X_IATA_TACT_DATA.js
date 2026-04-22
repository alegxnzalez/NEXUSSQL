// X_IATA_TACT_DATA.js

window.X_IATA_TACT_DATA = {
  "tables": {
    "X_IATA_TACT_DATA": {
      "description": "Staging table for IATA TACT rate data integration.  This is just a field representation of the fixed width text data supplied as flat files by IATA.",
      "columns": {
        "CATEGORY": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Identifies a logical group of records within the file, for example minimum charge, proportional rate, etc."
},
        "INTERNAL1": {
          "type": "VARCHAR2(6)",
          "nullable": true,
          "info": "Internal use"
},
        "ORIGIN_CITY": {
          "type": "VARCHAR2(3)",
          "nullable": true,
          "info": "Origin City as shown in the current IATA City Code Directory"
},
        "ORIGIN_COUNTRY": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Origin Country as detailed in the latest edition of ISO 3166 (E) and shown in the current IATA City Code Directory"
},
        "DEST_CITY": {
          "type": "VARCHAR2(3)",
          "nullable": true,
          "info": "Destination City as shown in the current IATA City Code Directory"
},
        "DEST_COUNTRY": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Destination Country  as detailed in the latest edition of ISO 3166 (E) and shown in the current IATA City Code Directory"
},
        "UNIQUE_NOTE": {
          "type": "VARCHAR2(4)",
          "nullable": true,
          "info": "Defines the note number reference detailing specific conditiosn/restrictions which aply to the rate/charge"
},
        "SERVPROV_CODE": {
          "type": "VARCHAR2(3)",
          "nullable": true,
          "info": "The carrier code of the participating carrier"
},
        "SCR_ITEM_NUMBER": {
          "type": "VARCHAR2(8)",
          "nullable": true,
          "info": "Defines the commodity description code as detailed in the IATA Specific Commodity Description Guide and other publications."
},
        "ULD_RATING_TYPE": {
          "type": "VARCHAR2(4)",
          "nullable": true,
          "info": "Defines the type of ULD for which the rate/charge is applicable."
},
        "ULD_CHARGE_CODE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Defines conditions under which the rates/charges are applicable"
},
        "CURRENCY_CODE": {
          "type": "VARCHAR2(3)",
          "nullable": true,
          "info": "Currency code"
},
        "DECIMAL_PLACE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Number of decimal places in the rate field"
},
        "RATE": {
          "type": "VARCHAR2(9)",
          "nullable": true,
          "info": "Numerical value of the rate/charge"
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true
},
        "SOURCE": {
          "type": "VARCHAR2(5)",
          "nullable": true
},
        "WEIGHT_BREAKPOINT": {
          "type": "VARCHAR2(6)",
          "nullable": true,
          "info": "Defines the minimum breakpoint at which the rate/charge is applicable.  Also identifies if the amount contained in the rate field is a minimum charge."
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