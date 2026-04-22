// GTM_TIP_INV_MOVEMENT_VALUE.js

window.GTM_TIP_INV_MOVEMENT_VALUE = {
  "tables": {
    "GTM_TIP_INV_MOVEMENT_VALUE": {
      "columns": {
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
        "GTM_TIP_INV_MOVEMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TIP_INV_MOVEMENT",
          "info": "GID of the GTM Trade Incentive Program Inventory Movement"
},
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_VALUE_QUALIFIER",
          "info": "GID of the value qualifier on the GTM Trade Incentive Program Movements."
},
        "VALUE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Currency value of the GTM Trade Incentive Program Movements."
},
        "VALUE_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Currency value in base units."
},
        "VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "GID of the value currency on GTM Trade Incentive Program Movements."
},
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE",
          "info": "Indicates the set of exchange rates to use for currency conversions; if null, the default conversion should be used."
},
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Indicates the date to be used for any currency conversion; if null, the latest conversion should be used."
},
        "VALUE_NOTE": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "A note that shows how value qualifier is calculated."
}
      },
      "fk_tables": []
    }
  }
};