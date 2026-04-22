// ITEM.js

window.ITEM = {
  "tables": {
    "ITEM": {
      "columns": {
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the item. "
        },
        "ITEM_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the item. "
        },
        "ITEM_NAME": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "Text for the name of the item. "
        },
        "COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COMMODITY",
          "info": "The GID for the commodity. "
        },
        "NMFC_ARTICLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "NMFC_ARTICLE",
          "info": "The GID for the National Motor Freight Classification (NMFC) article/item number. The NMFC article refers to the NMFC's standard grouping of items, for example the article Brick(s): Thermal energy storage, ceramic is identified with the item number of 32270. The intended use for this table is to assign the item number related to the NMFC article as the ID for the NMFC Article XID. Note that within the system the NMFC article and the relationship between the article and the NMFC freight class are for information only. "
        },
        "NMFC_CLASS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "NMFC_CLASS",
          "info": "The GID for the National Motor Freight Classification (NMFC). The NMFC is a critical piece of information used for rating Less-Than-Truckload shipments in North America. If you intend to rate shipments using RATEWAREXL or RATEWAREXL WITH CARRIERCONNECT it's important that the NMFC class information entered is a standard NMFC freight class - for example, 50, 55, 60, 65, 70, 77.5 etc. "
        },
        "STCC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STCC",
          "info": "The GID for the Standard Commodity Code (STCC). "
        },
        "HTS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HTS",
          "info": "The GID for the Harmonized Tariff System (HTS). "
        },
        "SITC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SITC",
          "info": "The GID for the Standard International Trade Classification (SITC). "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "A description of the item being shipped. "
        },
        "USER_DEFINED_COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "USER_DEFINED_COMMODITY",
          "info": "The GID for the user-defined commodity. "
        },
        "UDC_CLASSIFICATION_LIST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "UDC_CLASSIFICATION_LIST",
          "info": "List of User Defined commodities for item. "
        },
        "BRAND_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The brand name is an informational text field and allows you to enter the brand name for an item. "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The effective date is used to set the start time window for when an item should be used on an order. "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The expiration date is used to set the end time window for when an item should be used on an order. "
        },
        "MANUFACTURED_COUNTRY_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Legacy field used to identify an items manufactured country code. GTM now supports the concept of manufactured country code in a more robust fashion. This field is no longer used or visible on the UI. "
        },
        "IS_DRAWBACK": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Legacy field used to identify items that were to be tracked for duty drawback opportunities. This field is no longer used or visible on the UI. "
        },
        "IATA_SCR_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "IATA_SCR_CODE",
          "info": "Legacy field that was used to capture the IATA source code. This fields is no longer used for visible on the UI. "
        },
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Boolean field. When it is set to \"Y\", this row and its child data will be purged. "
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
          "info": "Date and time of the most recent data update. "
        },
        "UNIT_OF_MEASURE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "The price per unit of measure. "
        },
        "PRICE_PER_UNIT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The price per unit based on the unit of measure selected. "
        },
        "PRICE_PER_UNIT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The price per unit in the base unit of measure. "
        },
        "PRICE_PER_UNIT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the price per unit. "
        },
        "IS_TEMPLATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Check box indicating whether or not this item record will be used as an item template or not. "
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Indicators are icons that can be assigned to business objects that can be displayed in search Results pages and other lists to indicate the condition or state of a business object. You can use indicators to mark the history, status or any other condition of a business object. "
        },
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "PRIORITY": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "The priority associated with an item. "
        },
        "ITEM_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITEM_TYPE",
          "info": "Specifies the item type for the item "
        },
        "COUNTRY_OF_ORIGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Specifies the country of origin for the item "
        },
        "ITEM_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Item template gid indicates the last item template applied on item "
        },
        "PROD_CLASS_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Product Class template gid indicates the last classification template applied on the item "
        },
        "ATTRIBUTE_DATE11": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE12": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE13": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE14": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE15": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE16": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE17": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE18": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE19": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE20": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_NUMBER11": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER12": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER13": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER14": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER15": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER16": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER17": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER18": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER19": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER20": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number"
        }
      },
      "fk_tables": [
        "DM_TRANSACTION",
        "GTM_COMPLIANCE_RULE",
        "GTM_ITEM_CLASSIFICATION",
        "GTM_ITEM_COUNTRY_OF_ORIGIN",
        "GTM_ITEM_DESCRIPTION",
        "GTM_ITEM_UOM_CONVERSION",
        "GTM_LICENSE_LINE_ITEM",
        "GTM_REG_REL_ITEM",
        "GTM_STRUCTURE",
        "GTM_STRUCTURE_COMPONENT",
        "GTM_TRANSACTION_LINE",
        "ITEM_ACCESSORIAL",
        "ITEM_BOM",
        "ITEM_EXPORT_LICENSE",
        "ITEM_FEATURE",
        "ITEM_INTL_CLASSIFICATION",
        "ITEM_ORIGIN",
        "ITEM_PARTNER_ITEM_JOIN",
        "ITEM_PARTNER_SITE_ASSOC",
        "ITEM_REFNUM",
        "ITEM_RELATIONSHIP",
        "ITEM_REMARK",
        "ITEM_REQDOC",
        "ITEM_REQDOC_DOC",
        "ITEM_REQDOC_DOC_REVIEW",
        "ITEM_REQDOC_REVIEWER",
        "ITEM_REQDOC_STATUS",
        "ITEM_REQDOC_SUBSCRIBER",
        "ITEM_REQDOC_TEXT",
        "ITEM_SPECIAL_SERVICE",
        "ITEM_STATUS",
        "ITEM_TEXT",
        "OB_LINE",
        "OB_SHIP_UNIT_CONTENT",
        "ORDER_RELEASE_LINE",
        "PACKAGED_ITEM",
        "QUOTE_SHIP_UNIT",
        "SHIPMENT_STOP_DEBRIEF"
      ]
    }
  }
};
