// QUOTE_SHIP_UNIT.js

window.QUOTE_SHIP_UNIT = {
  "tables": {
    "QUOTE_SHIP_UNIT": {
      "description": "Ship unit details of the quote",
      "columns": {
        "QUOTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "QUOTE",
          "info": "The GID for the quote."
},
        "SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number for the ship unit."
},
        "COMMODITY_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The type of commodity."
},
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITEM",
          "info": "The GID for the item."
},
        "NMFC_CLASS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "NMFC_CLASS",
          "info": "The GID for the National Motor Freight Classification (NMFC). The NMFC is a critical piece of information used for rating Less-Than-Truckload shipments in North America. If you intend to rate shipments using RATEWAREXL or RATEWAREXL WITH CARRIERCONNECT it's important that the NMFC class information entered is a standard NMFC freight class - for example, 50, 55, 60, 65, 70, 77.5 etc."
},
        "STCC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STCC",
          "info": "The GID for the Standard Transportation Commodity Code (STCC)."
},
        "SITC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SITC",
          "info": "The GID for the Standard International Trade Classification (SITC) is a classification of goods used to classify the exports and imports of a country to enable comparing different countries and years. The classification system is maintained by the United Nations. Not used by OTM - all cross border compliance related classifications are handled by GTM."
},
        "HTS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HTS",
          "info": "The GID for the Harmonized Tariff Schedule (HTS). Not used by OTM - all cross border compliance related classifications are handled by GTM."
},
        "USER_DEFINED_COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "USER_DEFINED_COMMODITY",
          "info": "The GID for the user defined commodity code."
},
        "UDC_CLASSIFICATION_LIST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "UDC_CLASSIFICATION_LIST",
          "info": "The GID for the user defined commodity code list."
},
        "WEIGHT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Weight."
},
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measure for weight."
},
        "WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Weight amount in the base unit of measure."
},
        "VOLUME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Volume."
},
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measure for volume."
},
        "VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Volume amount in the base unit of measure."
},
        "IS_SPLITABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Flag to indicate if the quantity for this item is splittable."
},
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The GID for the transport handling unit."
},
        "SHIP_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "Count of transport handling units."
},
        "LENGTH": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Length."
},
        "LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measure for length."
},
        "LENGTH_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Length in the base unit of measure."
},
        "WIDTH": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Width."
},
        "WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measure for width."
},
        "WIDTH_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Width in the base unit of measure."
},
        "HEIGHT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Height."
},
        "HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measure for height."
},
        "HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Height in the base unit of measure."
},
        "DECLARED_VALUE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Declared value."
},
        "DECLARED_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the declared value currency."
},
        "DECLARED_VALUE_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The declared value in the base currency."
},
        "IATA_SCR_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "IATA_SCR_CODE",
          "info": "n/a"
},
        "COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COMMODITY",
          "info": "The unique identifier for the commodity."
},
        "EXPORT_HTS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HTS",
          "info": "The unique identifier for the export Harmonized Tariff System (HTS)."
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
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PACKAGED_ITEM",
          "info": "Identifies the package item corresponding to the item"
}
      },
      "fk_tables": []
    }
  }
};