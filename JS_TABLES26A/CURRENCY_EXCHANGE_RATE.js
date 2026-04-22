// CURRENCY_EXCHANGE_RATE.js

window.CURRENCY_EXCHANGE_RATE = {
  "tables": {
    "CURRENCY_EXCHANGE_RATE": {
      "description": "This table is used for the currency conversion in GC3. It stores the conversion rates for every country with effective dates. It is used along with the Currency table to calculate the currency conversion rates.",
      "columns": {
        "CURRENCY_EXCHANGE_RATE_ID": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The XID of the exchange rate."
},
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "EXCHANGE_RATE_BY_DATE",
          "info": "The GID of the exchange rate."
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false,
          "foreign_key": "EXCHANGE_RATE_BY_DATE",
          "info": "The effective date on which the currency exchange rate is applicable."
},
        "FROM_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The GID for the currency to be calculated into a different currency."
},
        "TO_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The GID for the currency into which the original currency was calculated."
},
        "TRIANGULATION_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "Use the Triangulation Currency field if you want to convert to an intermediate currency before the currency in the To Currency field. For example, you may want to convert from Pesetas to Euros before finally converting the rate to Yen."
},
        "MAXIMUM_PRECISION": {
          "type": "NUMBER(2)",
          "nullable": true,
          "info": "'Specifies different precision limits than the main exchange rate data. Enter the maximum precision and number of fractional digits in the Max Precision and Fractional Digits fields."
},
        "FRACTIONAL_DIGITS": {
          "type": "NUMBER(2)",
          "nullable": true,
          "info": "Specifies different precision limits than the main Exchange Rate data. Enter the maximum precision and number of fractional digits in the Max Precision and Fractional Digits fields."
},
        "EXCHANGE_RATE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Contains the actual exchange rate."
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