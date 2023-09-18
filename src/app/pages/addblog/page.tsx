'use client';
import { useEffect, useState } from 'react';
import { checkLogin } from '@/utils/checkLogin';
import './addblog.css';
export default function AddBlog() {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    checkLogin('/pages/addblog');
  }, []);

  const [blog, setBlog] = useState<FormData>({
    title: '',
    description: '',
    image: null,
    imageUrl: '',
    paragraphs: [],
    category: '',
  });

  const [categories, setCategories] = useState<string[]>([]);

  const getCategories = () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/blogcategories`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        // console.log(response.categories)
        setCategories(response.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <div className='addblog_in'>
        <h1 className='head1'>Add Blog</h1>
        <form
          style={{
            width: '70%',
            minWidth: '250px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className='forminput_cont'>
            <label>Blog Name</label>
            <input type='text' placeholder='Enter Blog Title' />
          </div>

          <div className='forminput_cont'>
            <label>Blog Category</label>
            <select
              value={blog.category} // Set the selected category value
              onChange={(e) => setBlog({ ...blog, category: e.target.value })} // Update the selected category
            >
              <option value=''>Select a category</option> {/* Default option */}
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className='forminput_cont'>
            <label>Blog Desciption</label>
            <textarea placeholder='Enter Blog Description' />
          </div>

          <div className='forminput_cont'>
            <label>Blog Image</label>
            <input type='file' />
          </div>
          <div className='paragraph'>
            <div className='forminput_cont'>
              <label>Paragraph Title</label>
              <input type='text' placeholder='Enter paragraph Title' />
            </div>
            <div className='forminput_cont'>
              <label>Paragraph Description</label>
              <textarea placeholder='Enter Paragraph Description' />
            </div>
            <div className='forminput_cont'>
              <label>Paragraph Image</label>
              <input type='file' />
            </div>

            <button type='submit' className='main_button'>
              Add More Paragraphs
            </button>
          </div>

          <button type='submit' className='main_button'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
