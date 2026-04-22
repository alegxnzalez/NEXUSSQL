// COUNTRY_CODE.js

window.COUNTRY_CODE = {
  "tables": {
    "COUNTRY_CODE": {
      "columns": {
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "COUNTRY_CODE3_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "COUNTRY_CODE2": {
          "type": "VARCHAR2(2)",
          "nullable": true
        },
        "COUNTRY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "info": "COUNTRY_NAME contains the country name. "
        },
        "COUNTRY_NUMBER": {
          "type": "VARCHAR2(10)",
          "nullable": false
        },
        "COUNTRY_ZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_ZONE",
          "info": "COUNTRY_ZONE_GID contains the unique identifier for the country zone. Zones can include: AFR ANT ASI AUS CAM CAR EAF EUR FAR MID NAM NPL SAF SAM SAO "
        },
        "COUNTRY_CODE_FIPS": {
          "type": "VARCHAR2(2)",
          "nullable": true
        },
        "GEO_POSTAL_CODE_LENGTH": {
          "type": "NUMBER()",
          "nullable": true
        },
        "IS_EU_MEMBER_COUNTRY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if country is member of European Union. "
        },
        "VALIDATE_POSTAL_CODE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "This flag should be set to 'Y' if address validation has been loaded into the POSTAL_CODE_VALIDATE table for this particular country. "
        },
        "CAR_REGISTRATION_CODE": {
          "type": "VARCHAR2(3)",
          "nullable": true,
          "info": "1-3 character car registration code. "
        },
        "IS_INSPECTION_REQUIRED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Inspection is required for this country. Default is 'N' "
        },
        "IS_COLLECT_ALLOWED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Collect is allowed for this country. Default is 'Y' "
        },
        "BOL_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "BOL Type. Copied down to shipment "
        },
        "BOL_ISSUANCE_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "BOL Issuance Type. Copied down to shipment "
        },
        "IS_MEMO_BL_ALLOWED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicate if this country allows Memo B/L "
        },
        "IATA_REGION": {
          "type": "VARCHAR2(2)",
          "nullable": false,
          "values": [
            "1",
            "2",
            "3"
          ],
          "info": "The IATA region code for this country.  Will be 1, 2, or 3"
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
      "fk_tables": [
        "COUNTRY_CODE_ATTRIBUTE",
        "COUNTY_OVERRIDE_DETAIL",
        "CURRENCY",
        "DISTANCE_BY_ADDRESSES",
        "DM_TRANSACTION",
        "DRIVER_CDL",
        "GEO_CITYPROV_POINT",
        "GEO_HIERARCHY",
        "GEO_POSTAL_POINT",
        "GTM_CAMPAIGN_LINE",
        "GTM_COMPLIANCE_RULE",
        "GTM_COMPLIANCE_RULE_COUNTRY",
        "GTM_DECL_MESSAGE",
        "GTM_ITEM_COUNTRY_OF_ORIGIN",
        "GTM_JURISDICTION",
        "GTM_LICENSE_REGION",
        "GTM_PROD_CLASS_TYPE",
        "GTM_RULES_OF_ORIGIN",
        "GTM_STRUCTURE",
        "GTM_STRUCTURE_COMPONENT",
        "GTM_TARIFF_COUNTRY",
        "GTM_TA_PARTNER",
        "GTM_TRANSACTION_LINE",
        "IE_SHIPMENTSTATUS",
        "IM_MILEAGE",
        "INVOICE",
        "INVOICE_LINEITEM",
        "INVOICE_LINEITEM_VAT",
        "INVOICE_PORT",
        "INV_SUPPLY_PROVINCE_VAT_REG",
        "ITEM",
        "ITEM_ORIGIN",
        "JOB_INVOLVED_PARTY",
        "LG_ADDRESS",
        "LOCATION",
        "ORDER_RELEASE",
        "ORDER_RELEASE_LINE",
        "POWER_UNIT",
        "PROVINCE_CODE_PROFILE_D",
        "QUOTE",
        "QUOTE_COST_OPTION_SHIPMENT",
        "REGION_DETAIL",
        "ROUTE_CODE",
        "SPLC",
        "TIME_ZONE_LOCALE",
        "VAT_PROVINCIAL_CNFG_PERSP",
        "VAT_PROVINCIAL_REGISTRATION",
        "VAT_RATE",
        "VAT_REGISTRATION",
        "VESSEL",
        "X_LANE"
      ]
    }
  }
};
