// QUOTE_COST_OPTION.js

window.QUOTE_COST_OPTION = {
  "tables": {
    "QUOTE_COST_OPTION": {
      "columns": {
        "QUOTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "QUOTE",
          "info": "The GID for the quote. "
        },
        "COST_OPTION_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "Option Number: Each possible cost option is assigned an Option Number. "
        },
        "SELL_TRANS_COST": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Total buy side transport cost for this quote option "
        },
        "SELL_TRANS_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "Currency ID for total buy side transport cost for this quote option. "
        },
        "SELL_TRANS_COST_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Database base amount for total buy side transport cost for this quote option. "
        },
        "IS_LATE_SELL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the buy side option is late. "
        },
        "IS_FEASIBLE_SELL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the buy side option is feasible. "
        },
        "SELL_ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY",
          "info": "Itinerary used for the buy side option. "
        },
        "BUY_TRANS_COST": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Total non-transport costs for buy side of this quote option. "
        },
        "BUY_TRANS_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "Currency for total non-transport costs for buy side of this quote option. "
        },
        "BUY_TRANS_COST_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Database base amount for total non-transport costs for buy side of this quote option. "
        },
        "IS_LATE_BUY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Total non-transport costs for sell side of this quote option. "
        },
        "IS_FEASIBLE_BUY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Currency for total non-transport costs for sell side of this quote option. "
        },
        "BUY_ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY",
          "info": "Database base amount for total non-transport costs for sell side of this quote option. "
        },
        "BUY_NON_TRANS_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total non-transport costs for buy side of this quote option. "
        },
        "BUY_NON_TRANS_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "Currency for total non-transport costs for buy side of this quote option. "
        },
        "BUY_NON_TRANS_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Database base amount for total non-transport costs for buy side of this quote option. "
        },
        "SELL_NON_TRANS_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total non-transport costs for sell side of this quote option. "
        },
        "SELL_NON_TRANS_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "Currency for total non-transport costs for sell side of this quote option. "
        },
        "SELL_NON_TRANS_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Database base amount for total non-transport costs for sell side of this quote option. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": [
        "QUOTE_COST_OPTION_EQUIPMENT",
        "QUOTE_COST_OPTION_REMARK",
        "QUOTE_COST_OPTION_SHIPMENT"
      ]
    }
  }
};
