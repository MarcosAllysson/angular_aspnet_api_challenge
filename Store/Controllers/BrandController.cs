using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Store.Models;
using Store.Services;

namespace Store.Controllers{

    [ApiController]
    [Route("api/v1/[controller]")]
    public class BrandController : ControllerBase{
        public BrandController(){}

        // GET all brands
        [HttpGet]
        public ActionResult<List<Brand>> GetAll() =>
            BrandService.GetAll();

        // GET by id
        [HttpGet("{id}")]
        public ActionResult<Brand> Get(int id){
            var brand = BrandService.Get(id);

            if (brand == null)
                return NotFound();

            return brand;
        }

        // POST
        [HttpPost]
        public IActionResult Create(Brand brand){
            BrandService.Add(brand);
            return CreatedAtAction(nameof(Create), new { id = brand.Id }, brand);
        }

        // PUT
        [HttpPut("{id}")]
        public IActionResult Update(int id, Brand brand){
            if (id != brand.Id)
                return BadRequest();

            var existing_brand = BrandService.Get(id);
            if (existing_brand is null)
                return NotFound();

            BrandService.Update(brand);

            return NoContent();
        }

        // DELETE
        [HttpDelete("{id}")]
        public IActionResult Delete(int id){
            var brand = BrandService.Get(id);

            if (brand is null)
                return NotFound();

            BrandService.Delete(id);

            return NoContent();
        }
    }
}