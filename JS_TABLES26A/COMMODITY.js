// COMMODITY.js

window.COMMODITY = {
  "tables": {
    "COMMODITY": {
      "description": "This is a grouping of the items. Multiple items can be part of a commodity. This table may define the transportation mode of the items within the commodity. For e.g., hazardous materials may not be transported via air.",
      "columns": {
        "COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Contains the GID for the commodity."
},
        "COMMODITY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Contains the GID for the commodity."
},
        "COMMODITY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Contains text for the name of the commodity."
},
        "TEMPERATURE_CONTROL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TEMPERATURE_CONTROL",
          "info": "A GID to define the temperature controls value for the commodity. The GID contains the domain portion."
},
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "The GID for the mode profile."
},
        "IS_TEMP_CONTROL": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Contains a Y for yes if the commodity is temperature controlled or an N if it is not."
},
        "REQ_EQPMT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "The GID for the equipment group profile."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "COMMODITY_DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Commodity description used to describe the commodity characteristics."
}
      },
      "fk_tables": [
        "ACTIVITY_TIME",
        "COMMODITY_INCOMPATIBILITY",
        "COMMODITY_PROTECTIVE_SERVICE",
        "EQUIPMENT_GROUP",
        "EQUIPMENT_GROUP_COMPARTMENT",
        "EQUIPMENT_LOAD_HISTORY",
        "FLEX_COMMODITY_PROFILE_D",
        "GTM_COMPLIANCE_RULE",
        "GTM_LICENSE_LINE",
        "GTM_REG_REL_COMMODITY",
        "ITEM",
        "P_LANE_ATTRIBUTES",
        "P_SHIPMENT",
        "QUOTE_SHIP_UNIT",
        "STOWAGE_MODE_PREF_RULE"
]
    }
  }
};